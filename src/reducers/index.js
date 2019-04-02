import { combineReducers } from 'redux';

import { saveNoteReducer } from './saveNoteReducer';


export const rootReducer = combineReducers({
  notes: saveNoteReducer,
})
