import { ApiGatewayManagementApiClient, PostToConnectionCommand } from '@aws-sdk/client-apigatewaymanagementapi';
import {
  DynamoDBClient,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput
} from '@aws-sdk/client-dynamodb';
import {EventBridgeEvent} from 'aws-lambda';

export type DomainEventMeta = {
  id: string;
  type: string;
  domain: string;
  scope: Array<string>;
  userId: string;
}

export type DomainEvent = {
  meta: DomainEventMeta;
  data: any;
}

const region = process.env.AWS_REGION;
const wsExecuteEndpoint = process.env.WS_EXECUTE_ENDPOINT!;

const apiClient = new ApiGatewayManagementApiClient({
  region,
  endpoint: wsExecuteEndpoint
});

const dynamoClient = new DynamoDBClient();

export const handler = async (event: EventBridgeEvent<string, DomainEvent>) => {

  console.log(JSON.stringify(event));
  console.log(wsExecuteEndpoint);

  try {
    const input: QueryCommandInput = {
      TableName: "public-bus-connection-table",
      IndexName: 'userIdIndex',
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: { ':userId': { S: event.detail.meta.userId }},
    };

    const getItemCommand = new QueryCommand(input);
    const res: QueryCommandOutput = await dynamoClient.send(getItemCommand);

    console.log(JSON.stringify(res));

    const items = res.Items;
    const item = items[0];

    const requestParams = {
      ConnectionId: item.id.S,
      Data: JSON.stringify(event.detail.data),
    };

    console.log(JSON.stringify(requestParams))

    const command = new PostToConnectionCommand(requestParams);
    await apiClient.send(command);

    return {
      "status": "ok"
    }
  } catch (e) {
    console.error(e)
    return {
      "status": "err"
    }
  }
}
