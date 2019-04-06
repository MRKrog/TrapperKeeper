import * as actions from './index';

describe('Actions', () => {

  it('should return a type of "FETCH_NOTES", with a notes array', () => {
    const allNotes = [];
    const expected = {
      type: 'FETCH_NOTES',
      allNotes
    };
    const result = actions.fetchNotes(allNotes);

    expect(result).toEqual(expected);
  });

  it('should return a type of "HAS_ERROR", with a message string', () => {
    const message = "";
    const expected = {
      type: 'HAS_ERROR',
      message
    };
    const result = actions.hasError(message);

    expect(result).toEqual(expected);
  });
});
