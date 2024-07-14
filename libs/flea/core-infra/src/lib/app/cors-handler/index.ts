export const handler = async (event: any) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type,Authorization",
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "OPTIONS,PUT,GET"
    },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
