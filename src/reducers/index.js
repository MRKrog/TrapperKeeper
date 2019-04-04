import { combineReducers } from 'redux';
import { saveNoteReducer } from './saveNoteReducer';
import { notesReducer } from './notesReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  note: saveNoteReducer,
  allNotes: notesReducer,
  error: errorReducer
})
