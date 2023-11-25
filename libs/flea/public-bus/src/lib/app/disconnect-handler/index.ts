import {DeleteItemCommand, DynamoDBClient, PutItemCommand} from '@aws-sdk/client-dynamodb';
import {DeleteItemCommandInput} from '@aws-sdk/client-dynamodb/dist-types/commands/DeleteItemCommand';

const client = new DynamoDBClient();

export const handler = async (event) => {
  console.log(JSON.stringify(event));

  const connectionId = event.requestContext.connectionId!;

  try {
    const input: DeleteItemCommandInput = {
      TableName: "public-bus-connection-table",
      Key: {
        id: {
          S: connectionId
        }
      }
    };

    const command = new DeleteItemCommand(input);
    await client.send(command);
    return {
      statusCode: 200,
      body: 'Socket successfully terminated.'
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Socket termination failed.'
    };
  }
}
