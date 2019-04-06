import { fetchData } from './fetchData';

describe('fetchData', () => {
  let mockBody
  let url

  beforeEach(() => {
    url = "www.movies.com"
    mockBody = [
      { id: 1, title: "Archie's Playdate" },
      { id: 1, title: "Shopping List" }
    ]

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve()
    }))
  })

  it('should take an expected url', async () => {
    await fetchData(url, mockBody)
    expect(fetch).toHaveBeenCalledWith(url, mockBody)
  })
})