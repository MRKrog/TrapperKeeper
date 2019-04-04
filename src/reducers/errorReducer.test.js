import { errorReducer } from './errorReducer'
import * as actions from '../actions'

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = ""
    const result = errorReducer("", {})

    expect(result).toEqual(expected)
  })

  it('should return the state with an error message added', () => {
    const initialState = ""
    const mockError = "Sorry something went wrong"
    const action = actions.hasError(mockError)
    const expected = "Sorry something went wrong"
    const result = errorReducer(initialState, action)

    expect(result).toEqual(expected)
  })
})