import { fetchData } from '../fetchData';
import React from 'react'
import { shallow } from 'enzyme'

describe('fetchData', () => {
  let mockData
  let url

  beforeEach(() => {
    url = "www.movies.com"
    mockData = [
      { id: 1, title: "Archie's Playdate" },
      { id: 1, title: "Shopping List" }
    ]

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve()
    }))
  })

  it('should take an expected url', () => {
    fetchData(url)
    expect(fetch).toHaveBeenCalledWith(url)
  })
})