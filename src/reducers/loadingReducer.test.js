import { loadingReducer } from './loadingReducer';
import { isLoading } from '../actions';

describe('loadingReducer', () => {
    let defaultState

    beforeEach(() => {
        defaultState = true
    })

    it('should return the initial state', () => {
        const result = loadingReducer(defaultState, {});
        expect(result).toEqual(defaultState);
    })

    it('should return the state under the case "IS_LOADING"', () => {
        const mockAction = isLoading(false);
        const result = loadingReducer(defaultState, mockAction);
        expect(result).toEqual(false);
    })

})