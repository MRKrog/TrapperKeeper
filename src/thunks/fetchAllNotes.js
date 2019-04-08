import { fetchNotes, hasError, isLoading } from '../actions';

export const fetchAllNotes = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      dispatch(isLoading(false));
      if(!response.ok){
        throw Error(response.statusText)
      }
      const result = await response.json();
      dispatch(fetchNotes(result));
    } catch (error) {
      dispatch(hasError(error.message));
    }
  }
}
