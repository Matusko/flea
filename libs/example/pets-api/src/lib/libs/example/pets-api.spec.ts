import { libsExamplePetsApi } from './libs/example/pets-api';

describe('libsExamplePetsApi', () => {
  it('should work', () => {
    expect(libsExamplePetsApi()).toEqual('libs/example/pets-api');
  });
});
