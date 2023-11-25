import {DynamoDBClient, PutItemCommand} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient();

export const handler = async (event) => {
  console.log(JSON.stringify(event));

  const connectionId = event.requestContext.connectionId!;
  const userId = event.requestContext.authorizer!.userId;

    try {
      const input = {
        TableName: "public-bus-connection-table",
        Item: {
          "id": {
            S: connectionId
          },
          "userId": {
            S: userId
          },
        }
      };

      const command = new PutItemCommand(input);
      await client.send(command);
      return { statusCode: 200, body: "Connected." };
    } catch (err) {
      console.error(err);
      return { statusCode: 500, body: "Connection failed." };
    }
}
