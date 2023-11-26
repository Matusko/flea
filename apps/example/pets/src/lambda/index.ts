import {EventBridgeClient, PutEventsCommand} from '@aws-sdk/client-eventbridge';

const eventBusArn = process.env.EVENT_BUS_ARN!;

const client = new EventBridgeClient({});

export const handler = async (event) => {
  console.log(JSON.stringify(event));

  if (event['detail-type'] === 'pets/UpsertPet') {
    return {
      "status": "ok yeah"
    }
  }

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
              name: event.detail.dynamodb.NewImage.name.S,
              type: event.detail.dynamodb.NewImage.type.S
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

  const response = await client.send(
    new PutEventsCommand(putEvent),
  );

  console.log(`PutEvents response: ${JSON.stringify(response)}`);

  return {
    "status": "ok yeah"
  }
}
