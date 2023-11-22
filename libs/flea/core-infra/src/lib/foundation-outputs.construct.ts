import {Construct} from 'constructs';
import {CfnOutput} from 'aws-cdk-lib';

export interface FleaFoundationOutputItem {
  key: string;
  value: string;
}

export interface FleaFoundationOutputsProps {
  prefix: string,
  outputs: Array<FleaFoundationOutputItem>
}

export class FleaFoundationOutputs extends Construct {
  constructor(scope: Construct, id: string, props: FleaFoundationOutputsProps) {
    super(scope, id);

    props.outputs.forEach(item => {
      new CfnOutput(this, `output-${item.key}`, {
        exportName: `${props.prefix}-${item.key}`,
        value: item.value
      });
    });

  }
}
