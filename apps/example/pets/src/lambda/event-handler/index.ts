import { v4 as uuidv4 } from 'uuid';
import {EventBridgeClient, PutEventsCommand} from '@aws-sdk/client-eventbridge';
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

const eventBusArn = process.env.EVENT_BUS_ARN!;
const tableName = process.env.READ_MODEL_TABLE_NAME!;

const eventBridgeClient = new EventBridgeClient({});

const dynamoDBClient = new DynamoDBClient({});
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export const handler = async (event) => {
  console.log(JSON.stringify(event));

  if (event['detail-type'] === 'pets/UpsertPet') {
    return {
      "status": "ok yeah"
    }
  }

  const item = {
    id: event.detail.dynamodb.NewImage.payload.M.id ? event.detail.dynamodb.NewImage.payload.M.id.S : uuidv4(),
    name: event.detail.dynamodb.NewImage.payload.M.name.S,
    type: event.detail.dynamodb.NewImage.payload.M.type.S
  }

  console.log(`item: ${JSON.stringify(item)}`);

  const command = new PutCommand({
    TableName: tableName,
    Item: item
  });

  await dynamoDBDocumentClient.send(command);

  const putEvent = {
    Entries: [
      {
        Detail: JSON.stringify(
          {
            meta: {
              scope: [
                'public'
              ],
              userId: event.detail.dynamodb.NewImage.userId.S
            },
            data: {
              payload: item,
              type: 'pets/command-reply/addPetCommandSucc' // TODO command reply? or event?
            }
          }
        ),
        Source: 'com.sample',
        DetailType: 'pets/UpsertPet',
        EventBusName: eventBusArn
      },
    ]
  };

  console.log(`Send event: ${JSON.stringify(putEvent)}`);

  const response = await eventBridgeClient.send(
    new PutEventsCommand(putEvent),
  );

  console.log(`PutEvents response: ${JSON.stringify(response)}`);

  return {
    "status": "ok yeah"
  }
}
