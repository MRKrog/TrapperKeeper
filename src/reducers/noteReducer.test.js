import { notesReducer } from './notesReducer';
import * as actions from '../actions';

describe('saveNoteReducer', () => {

  it('should have a default state of an array', () => {
    const expected = [];
    const result = notesReducer(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return the state with FETCH_NOTES', () => {
    const mockNotes = [
      { id: 12345, title: 'worf'}
    ];
    const intialState = [];
    const predicted = mockNotes;

    const action = actions.fetchNotes(mockNotes);
    const result = notesReducer(intialState, action);

    expect(result).toEqual(predicted);
  });
});