import {Construct} from 'constructs';
import {FleaEventStore} from './event-store.construct';
import {FleaEventStorePublicGatewayIntegration} from './public-rest-gateway-integration.construct';
import {Resource, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {Function} from 'aws-cdk-lib/aws-lambda';
import {FleaEventBus} from './event-bus.construct';
import {
  FleaReadModel,
  ReadModelPublicBusIntegrationBaseProps,
} from './read-model.construct';
import {NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Fn} from 'aws-cdk-lib';
import {FleaCommandHandler, FleaCommandHandlerProps} from './command-handler.construct';
import {FleaQueryHandler} from './query-handler.construct';

export interface FleaDomainProps {
  name: string;
  foundationName: string;
  domainResourcePath: string;
  readModelTableName: string;
  eventListenerProps: NodejsFunctionProps;
  queryHandlerProps: NodejsFunctionProps;
  commandHandlerProps: NodejsFunctionProps;
  readModelPublicBusIntegrationProps: ReadModelPublicBusIntegrationBaseProps;
}

export class FleaDomain extends Construct {
  constructor(scope: Construct, id: string, props: FleaDomainProps) {
    super(scope, id);

    const restApiId = Fn.importValue(`${props.foundationName}-restApiId`);
    const rootResourceId = Fn.importValue(`${props.foundationName}-rootResourceId`);
    const corsHandlerArn = Fn.importValue(`${props.foundationName}-corsHandlerArn`);
    const webSocketApiId = Fn.importValue(`${props.foundationName}-webSocketApiId`);
    const userPoolId = Fn.importValue(`${props.foundationName}-userPoolId`);
    const publicEventBusName = Fn.importValue(`${props.foundationName}-publicEventBusName`);

    const eventStore = new FleaEventStore(this, 'event-store', {
      domainName: props.name,
    });

    const commandHandler = new FleaCommandHandler(this, 'command-handler', {
      commandHandlerProps: props.commandHandlerProps,
      eventStoreTable: eventStore.table
    });

    const eventBus = new FleaEventBus(this, 'domain-event-bus', {
      domainName: props.name,
      eventStore,
      publicEventBusName
    });

    const api = RestApi.fromRestApiId(this, 'public-rest-gateway', restApiId);
    const rootResource = Resource.fromResourceAttributes(this, 'public-rest-gateway-root-resource', {
      restApi: api,
      path: '',
      resourceId: rootResourceId
    })

    const corsHandler = Function.fromFunctionArn(this, 'cors-handler', corsHandlerArn);

    const readModel = new FleaReadModel(this, 'read-model', {
      tableName: props.readModelTableName,
      eventListenerProps: props.eventListenerProps,
      eventBus: eventBus.bus,
      publicBus: {
        ...props.readModelPublicBusIntegrationProps,
        webSocketApiId
      },
    });

    const queryHandler = new FleaQueryHandler(this, 'query-handler', {
      queryHandlerProps: props.queryHandlerProps,
      readModelTable: readModel.table
    });

    new FleaEventStorePublicGatewayIntegration(this, 'event-store-integration', {
      parentResource: rootResource,
      domainResourcePath: props.domainResourcePath,
      stageName: 'prod',
      userPoolId,
      corsHandler,
      queryHandler: queryHandler.function,
      commandHandler: commandHandler.function
    });

  }
}
