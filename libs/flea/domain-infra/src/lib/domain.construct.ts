import {Construct} from 'constructs';
import {FleaEventStore} from './event-store.construct';
import {FleaEventStorePublicGatewayIntegration} from './public-rest-gateway-integration.construct';
import {Resource, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {FleaEventBus} from './event-bus.construct';
import {
  FleaReadModel,
  ReadModelPublicBusIntegrationBaseProps,
} from './read-model.construct';
import {NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Fn} from 'aws-cdk-lib';

export interface FleaDomainProps {
  name: string;
  foundationName: string;
  domainResourcePath: string;
  readModelTableName: string;
  eventListenerProps: NodejsFunctionProps;
  readModelPublicBusIntegrationProps: ReadModelPublicBusIntegrationBaseProps;
}

export class FleaDomain extends Construct {
  constructor(scope: Construct, id: string, props: FleaDomainProps) {
    super(scope, id);

    const restApiId = Fn.importValue(`${props.foundationName}-restApiId`);
    const rootResourceId = Fn.importValue(`${props.foundationName}-rootResourceId`);
    const webSocketApiId = Fn.importValue(`${props.foundationName}-webSocketApiId`);
    const userPoolId = Fn.importValue(`${props.foundationName}-userPoolId`);

    const eventStore = new FleaEventStore(this, 'event-store');

    const eventBus = new FleaEventBus(this, 'domain-event-bus', {
      domainName: props.name,
      eventStore
    });

    const api = RestApi.fromRestApiId(this, 'public-rest-gateway', restApiId);
    const rootResource = Resource.fromResourceAttributes(this, 'public-rest-gateway-root-resource', {
      restApi: api,
      path: '',
      resourceId: rootResourceId
    })

    new FleaEventStorePublicGatewayIntegration(this, 'event-store-integration', {
      parentResource: rootResource,
      domainResourcePath: props.domainResourcePath,
      stageName: 'prod',
      eventStore: {
        tableName: eventStore.table.tableName,
        tableArn: eventStore.table.tableArn
      },
      userPoolId
    });

    new FleaReadModel(this, 'read-model', {
      tableName: props.readModelTableName,
      eventListenerProps: props.eventListenerProps,
      eventBus: eventBus.bus,
      publicBus: {
        ...props.readModelPublicBusIntegrationProps,
        webSocketApiId
      },
    });

  }
}
