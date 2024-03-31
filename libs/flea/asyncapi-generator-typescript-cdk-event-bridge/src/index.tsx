import { File } from '@asyncapi/generator-react-sdk';
import {FleaFileEventBridgeRule} from './lib/flea-asyncapi-generator-typescript-cdk-event-bridge-rule';
import { kebabCase } from 'change-case-all';

export default async function ({asyncapi}) {

  console.debug("Template asyncapi-generator-typescript-cdk-event-bridge", asyncapi);

  const domainName = asyncapi.info().title();
  const fileNameFleaFileEventBridgeRule = `${kebabCase(domainName)}-event-bridge-rule.construct.ts`;

  return [
      <File name={fileNameFleaFileEventBridgeRule}>
        <FleaFileEventBridgeRule domainName={domainName} asyncapi={asyncapi}></FleaFileEventBridgeRule>
      </File>,
    ];
  /*
  const schemas = asyncapi.allSchemas();


  return Array.from(schemas).map(([schemaName, schema]) => {
    console.debug(schemaName, JSON.stringify(schema, null, 4));
    const name = kebabCase(schemaName);
    return (
      <File name={`${name}.json`}>
        {JSON.stringify(schema, null, 4)}
      </File>
    );
  });*/

}
