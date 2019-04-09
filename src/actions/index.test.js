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

  it('should return a type of "IS_LOADING", with a boolean value', () => {
    const value = false;
    const expected = {
      type: 'IS_LOADING',
      value
    };
    const result = actions.isLoading(value);
    
    expect(result).toEqual(expected);
  })
});
