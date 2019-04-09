import { fetchOptionsCreator } from './fetchOptionsCreator';

describe('fetchOptionsCreator', () => {
  let type;
  let mockBody;

  beforeEach(() => {
    type = 'POST';
    mockBody = {
        title: 'mock title',
        list: [{
            id: 1,
            isComplete: false,
            text: 'mock list'
          }]
    }
  })

  it('should return expected data', async () => {
    const result = await fetchOptionsCreator(type, mockBody);
    const expected = {
        method: type,
        body: JSON.stringify(mockBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    expect(result).toEqual(expected);
  });

})