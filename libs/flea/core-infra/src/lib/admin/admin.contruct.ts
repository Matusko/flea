import {RemovalPolicy} from 'aws-cdk-lib';
import {BlockPublicAccess, Bucket, BucketEncryption} from 'aws-cdk-lib/aws-s3';
import {Construct} from 'constructs';

export class FleaAdmin extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Bucket(scope, `${id}-admin-bucket`, {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });
  }
}
