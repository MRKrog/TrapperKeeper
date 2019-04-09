import { fetchAllNotes } from './fetchAllNotes'
import { fetchNotes, hasError, isLoading } from '../actions'

describe('fetchAllNotes', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = "www.googlenotes.com"
    mockDispatch = jest.fn()
  })

  it('should dispatch isLoading immediately', () => {
    const thunk = fetchAllNotes(mockUrl)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  })

  it('should dispatch fetchNotes if the response is okay', async () => {
    const mockAllNotes = [
      { id: "123ABA",
        title: 'Worf ToDo',
        list: [
          { id: "123213", text: 'Eat food', isComplete: false },
        ]
      },
      { id: "987GDGFD",
        title: 'Jake ToDo',
        list: [
          { id: "2353534543", text: 'Do basic styling', isComplete: false },
        ]
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockAllNotes)
    }))

    const thunk = fetchAllNotes(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(fetchNotes(mockAllNotes))
  })

  it('should dispatch isLoading after the fetch attempt', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }))
    const thunk = fetchAllNotes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  })

  it('should dispatch hasError with the message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))

    const thunk = fetchAllNotes(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError('Something went wrong'));
  })

})