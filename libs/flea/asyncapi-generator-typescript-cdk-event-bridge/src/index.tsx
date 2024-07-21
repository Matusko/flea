import { File } from '@asyncapi/generator-react-sdk';
import {TypeScriptGenerator} from '@asyncapi/modelina';
import {FleaFileEventBridgeRule} from './lib/flea-asyncapi-generator-typescript-cdk-event-bridge-rule';
import { kebabCase } from 'change-case-all';

export default async function ({asyncapi}) {

  console.debug("Template asyncapi-generator-typescript-cdk-event-bridge", asyncapi);

  const domainName = asyncapi.info().title();
  const fileNameFleaEventBridgeRule = `${kebabCase(domainName)}-event-bridge-rule.construct.ts`;
  const fileNameFleaModels = `${kebabCase(domainName)}-models.ts`;

  const generator = new TypeScriptGenerator({
    modelType: "interface"
  });

  const models = await generator.generate(asyncapi);
  const modelFileContent = models.map(outputModel => editFileContent(outputModel.result))
    .join("\r\n\r\n");

  return [
      <File name={fileNameFleaEventBridgeRule}>
        <FleaFileEventBridgeRule domainName={domainName} asyncapi={asyncapi}></FleaFileEventBridgeRule>
      </File>,
    <File name={fileNameFleaModels}>{modelFileContent}</File>
    ]

}

const editFileContent = (fileContent) => {
  return `export ${fileContent}`;
}


