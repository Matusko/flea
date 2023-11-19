import {Parser, stringify} from '@asyncapi/parser';

export const asyncApiToEventModel = async (spec: string) => {
  const parser = new Parser();
  const { document } = await parser.parse(`
    asyncapi: '2.4.0'
    info:
      title: Example AsyncAPI specification
      version: '0.1.0'
    channels:
      example-channel:
        subscribe:
          message:
            payload:
              type: object
              properties:
                exampleField:
                  type: string
                exampleNumber:
                  type: number
                exampleDate:
                  type: string
                  format: date-time
`);

  if (document) {
    // => Example AsyncAPI specification
    console.log(stringify(document));
  }
  return "all right";
}
