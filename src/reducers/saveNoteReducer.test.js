import { saveNoteReducer } from './saveNoteReducer';
import { saveNote } from '../actions/index';

describe('saveNoteReducer', () => {

  it('should have a default state of an array', () => {
    const expected = [];
    const result = saveNoteReducer(undefined, {})
    expect(result).toEqual(expected)
  })


})
