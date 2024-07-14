import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, PutCommand} from '@aws-sdk/lib-dynamodb'

const tableName = process.env.EVENT_STORE_TABLE_NAME!;

const dynamoDBClient = new DynamoDBClient({});
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export const handler = async (command) => {
  console.log(JSON.stringify(command));

  const dynamoCommand = new PutCommand({
    TableName: tableName,
    Item: registerCommandAsEvent(command)
  });

  await dynamoDBDocumentClient.send(dynamoCommand);

  return {status: 'ok'}
}

const registerCommandAsEvent = (command: any): any => {
  return {
    id: command.id,
    time: command.time,
    timeEpoch: command.timeEpoch,
    userId: command.userId,
    type: eventMap[command.type],
    payload: command.payload
  }
}

const eventMap = {
  'pets/command/addPet': 'pets/event/petAdded'
}
