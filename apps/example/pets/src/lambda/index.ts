import { ApiGatewayManagementApiClient, PostToConnectionCommand } from '@aws-sdk/client-apigatewaymanagementapi';


export const handler = async (event) => {
  const client = new ApiGatewayManagementApiClient({
    region: 'eu-central-1',
    endpoint: 'https://edaxipnzr1.execute-api.eu-central-1.amazonaws.com/prod'
  });

  console.log(JSON.stringify(event));
  const color = event.detail.dynamodb.NewImage.Color.S;
  console.log(`color is: ${color}`);

  const requestParams = {
    ConnectionId: color,
    Data: `{"msg": "${event.id}"}`,
  };

  const command = new PostToConnectionCommand(requestParams);

  try {
    await client.send(command);
  } catch (error) {
    console.log(error);
  }

  return {
    "status": "ok yeah"
  }
}
