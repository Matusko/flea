import { File } from '@asyncapi/generator-react-sdk'

export default function ({ asyncapi }) {

  console.debug("Template asyncapi-generator-typescript-cdk-event-bridge");
  console.debug(JSON.stringify(asyncapi, null, 4));
  const kebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

  const fileName = `${kebabCase(asyncapi.info().title())}-event-bridge.construct.ts`;

  return <File name={fileName}>{asyncapi.info().title()}</File>
}
