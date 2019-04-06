import { fetchNotes, hasError } from '../actions';

export const fetchAllNotes = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      console.log("response", response)
      if(!response.ok){
        throw Error(response.statusText)
      }
      const result = await response.json()
      console.log("result", result)
      dispatch(fetchNotes(result));
    } catch (error) {
      dispatch(hasError(error.message))
    }
  }
}