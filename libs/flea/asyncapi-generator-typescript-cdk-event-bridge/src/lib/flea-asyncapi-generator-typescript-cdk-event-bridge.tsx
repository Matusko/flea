import { File } from '@asyncapi/generator-react-sdk'

export function fleaAsyncapiGeneratorTypescriptCdkEventBridge({ asyncapi }) {

  return <File name="client.py">{asyncapi.info().title()}</File>;
}
