import { fetchNotes, hasError } from '../actions';

export const fetchAllNotes = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if(!response.ok){
        throw Error(response.statusText)
      }
      const result = await response.json()
      dispatch(fetchNotes(result));
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}
