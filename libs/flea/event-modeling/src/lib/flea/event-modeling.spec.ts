import {asyncApiToEventModel} from '@flea/event-modeling';

describe('asyncApiToEventModel', () => {
  it('should work', async () => {
    expect(await asyncApiToEventModel("a")).toEqual('all right');
  });
});
