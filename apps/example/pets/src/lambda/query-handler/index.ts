import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, ScanCommand} from '@aws-sdk/lib-dynamodb'

const tableName = process.env.READ_MODEL_TABLE_NAME!;

const dynamoDBClient = new DynamoDBClient({});
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export const handler = async (event) => {
  console.log(JSON.stringify(event));

  const command = new ScanCommand({
    TableName: tableName
  });

  const resp = await dynamoDBDocumentClient.send(command);

  return resp.Items;
}
