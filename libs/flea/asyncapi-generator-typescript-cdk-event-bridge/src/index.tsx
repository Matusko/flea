import { File } from '@asyncapi/generator-react-sdk';
import {FormatHelpers, TypeScriptGenerator} from '@asyncapi/modelina';
import {FleaFileEventBridgeRule} from './lib/flea-asyncapi-generator-typescript-cdk-event-bridge-rule';
import { kebabCase } from 'change-case-all';

export default async function ({asyncapi}) {

  console.debug("Template asyncapi-generator-typescript-cdk-event-bridge", asyncapi);

  const domainName = asyncapi.info().title();
  const fileNameFleaFileEventBridgeRule = `${kebabCase(domainName)}-event-bridge-rule.construct.ts`;

  const generator = new TypeScriptGenerator({
    modelType: "interface"
  });

  const models = await generator.generate(asyncapi);
  const modelFileContent = models.map(outputModel => editFileContent(outputModel.result))
    .join("\r\n\r\n");
  /*
  const modelFiles = [];
  for (const model of models) {
    // 8
    const modelFileName = `${FormatHelpers.toParamCase(model.modelName)}.ts`;
    // 9
    modelFiles.push(<File name={modelFileName}>{model.result}</File>);
  }
*/
  return [
      <File name={fileNameFleaFileEventBridgeRule}>
        <FleaFileEventBridgeRule domainName={domainName} asyncapi={asyncapi}></FleaFileEventBridgeRule>
      </File>,
    <File name="models.ts">{modelFileContent}</File>
    ]

}

const editFileContent = (fileContent) => {
  return `export ${fileContent}`;
}


