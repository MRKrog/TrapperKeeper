import { fetchData } from '../utility/fetchData';
import { fetchNotes, hasError } from '../actions';

export const fetchAllNotes = () => {
  return async (dispatch) => {
    const url = 'http://localhost:3001/api/v1/notes'
    try {
      const response = await fetchData(url)
      dispatch(fetchNotes(response));
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}