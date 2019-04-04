import * as actions from './index';

describe('Actions', () => {

  it('should return a type of "FETCH_NOTES", with fetchNotes', () => {
    const allNotes = [];
    const predicted = {
      type: 'FETCH_NOTES',
      allNotes
    };
    const result = actions.fetchNotes(allNotes);

    expect(result).toEqual(predicted);
  });

  it('should return a type of "SAVE_NOTE", with saveNote', () => {
    const note = {};
    const predicted = {
      type: 'SAVE_NOTE',
      note
    };
    const result = actions.saveNote(note);

    expect(result).toEqual(predicted);
  });
});
