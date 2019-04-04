import { fetchData } from '../utility/fetchData';
import { fetchNotes, hasError } from '../actions';

export const fetchAllNotes = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetchData(url)
      dispatch(fetchNotes(response));
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}