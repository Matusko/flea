import {Text, Indent, FunctionComponent} from '@asyncapi/generator-react-sdk'
import { pascalCase } from 'change-case-all';

const ImportsText: FunctionComponent = ({}) => {
  return (
    <Text>
      <Text>import {"{Construct}"} from 'constructs';</Text>
      <Text>import {"{EventBus, IEventBus, Rule}"} from 'aws-cdk-lib/aws-events';</Text>
    </Text>
  )
}

const PropsText: FunctionComponent = ({propsClassName}) => {
  return (
    <Text>
      <Text>export interface {propsClassName} {"{"}</Text>
      <Text indent={2}>eventBus: IEventBus;</Text>
      <Text>{"}"}</Text>
    </Text>
  )
}

const RuleText: FunctionComponent = ({propsClassName}) => {
  return (
    <Text>
      <Text>const rule = new Rule(this, 'rule', {"{"}</Text>
      <Indent size={2}>
        <Text>eventPattern: {"{"}</Text>
        <Indent size={2}>
          <Text>source: ["com.sample"],</Text>
          <Text>detail:  {"{"}</Text>
          <Indent size={2}>
            <Text>meta:  {"{"}</Text>
            <Indent size={2}>
              <Text>scope: ["public"],</Text>
            </Indent>
            <Text>{"}"}</Text>
          </Indent>
          <Text>{"}"}</Text>
        </Indent>
        <Text>{"}"},</Text>
        <Text>eventBus</Text>
      </Indent>
      <Text>{"}"});</Text>
      <Text>rule.addTarget(new LambdaTarget(lambda, {}));</Text>
    </Text>
  )
}

const FleaFileEventBridgeRule: FunctionComponent = ({asyncapi, domainName}) => {
  const domainNameClassPrefix = pascalCase(domainName);
  const propsClassName = `${domainNameClassPrefix}EventBridgeRuleProps`;
  return (
    <Text>
      <ImportsText />
      <PropsText propsClassName={propsClassName}/>
      <Text>export class {domainNameClassPrefix}EventBridgeRule extends Construct {"{"}</Text>
      <Text />
      <Indent size={2}>
        <Text>constructor(scope: Construct, id: string, props: {propsClassName}) {"{"}</Text>
        <Text />
        <Indent size={2}>
          <Text>super(scope, id);</Text>
          <Text />
          <Text>const {"{"} eventBus {"}"} = props;</Text>
          <Text />
          <RuleText />
        </Indent>
        <Text>{"}"}</Text>
      </Indent>
      <Text>{"}"}</Text>
    </Text>
  )
}

export { FleaFileEventBridgeRule };
