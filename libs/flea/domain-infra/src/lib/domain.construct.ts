import {Construct} from 'constructs';
import {FleaEventStore} from './event-store.construct';
import {FleaEventStorePublicGatewayIntegration} from './public-rest-gateway-integration.construct';
import {Resource, RestApi} from 'aws-cdk-lib/aws-apigateway';
import {FleaEventBus} from './event-bus.construct';
import {FleaReadModel, FleaReadModelProps} from './read-model.construct';
import {NodejsFunctionProps} from 'aws-cdk-lib/aws-lambda-nodejs';

export interface FleaDomainProps {
  name: string;
  restApiId: string;
  rootResourceId: string;
  domainResourcePath: string;
  readModelTableName: string;
  eventListenerProps: NodejsFunctionProps;
}

export class FleaDomain extends Construct {
  constructor(scope: Construct, id: string, props: FleaDomainProps) {
    super(scope, id);

    const eventStore = new FleaEventStore(this, 'event-store');

    const eventBus = new FleaEventBus(this, 'domain-event-bus', {
      domainName: props.name,
      eventStore
    });

    const api = RestApi.fromRestApiId(this, 'public-rest-gateway', props.restApiId);
    const rootResource = Resource.fromResourceAttributes(this, 'public-rest-gateway-root-resource', {
      restApi: api,
      path: '',
      resourceId: props.rootResourceId
    })

    new FleaEventStorePublicGatewayIntegration(this, 'event-store-integration', {
      parentResource: rootResource,
      domainResourcePath: props.domainResourcePath,
      stageName: 'prod',
      eventStore: {
        tableName: eventStore.table.tableName,
        tableArn: eventStore.table.tableArn
      }
    });

    new FleaReadModel(this, 'read-model', {
      tableName: props.readModelTableName,
      eventListenerProps: props.eventListenerProps,
      eventBus: eventBus.bus
    });

  }
}
