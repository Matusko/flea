/* eslint-disable */
export default {
  displayName: 'flea-asyncapi-generator-typescript-cdk-event-bridge',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../coverage/libs/flea/asyncapi-generator-typescript-cdk-event-bridge',
};
