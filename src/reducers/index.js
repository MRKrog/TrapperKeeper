import { combineReducers } from 'redux';

import { saveNoteReducer } from './saveNoteReducer';

import { notesReducer } from './notesReducer';


export const rootReducer = combineReducers({
  note: saveNoteReducer,
  allNotes: notesReducer
})
