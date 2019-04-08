import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  allNotes: notesReducer,
  error: errorReducer,
  loading: loadingReducer
})
