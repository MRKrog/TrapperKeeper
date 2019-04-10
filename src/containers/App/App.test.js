import React from 'react';
import { shallow, mount } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from './App';

import { hasError } from '../../actions'
import { fetchAllNotes } from '../../thunks/fetchAllNotes'


jest.mock('../../thunks/fetchAllNotes');

describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockfetchAllNotes;

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
    ];

    beforeEach(() => {
      mockfetchAllNotes = jest.fn().mockImplementation(() => Promise.resolve({results: mockAllNotes}))
      wrapper = shallow(<App fetchAllNotes={mockfetchAllNotes} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it("should invoke the function fetchAllNotes on componentDidMount", async () => {
      wrapper.instance().componentDidMount()
      expect(mockfetchAllNotes).toBeCalled()
    })

    it("should call fetchAllNotes with expected url", async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      wrapper.instance().componentDidMount()
      expect(mockfetchAllNotes).toHaveBeenCalledWith(mockUrl)
    })




  });

  describe('mapStateToProps', () => {
    it('should return an object with a notes array and an error string', () => {
      const mockState = {
        allNotes: [
          { id: "123ABA",
            title: 'Worf ToDo',
            list: [
              { id: "123", text: 'Eat food', isComplete: false },
            ]
          },
          { id: "987GDGFD",
            title: 'Jake ToDo',
            list: [
              { id: "0098", text: 'Do styling', isComplete: false },
            ]
          }
        ],
        error: "",
        fakeState: "Not real state to return"
      }
      const expected = {
        allNotes: [
          { id: "123ABA",
            title: 'Worf ToDo',
            list: [
              { id: "123", text: 'Eat food', isComplete: false },
            ]
          },
          { id: "987GDGFD",
            title: 'Jake ToDo',
            list: [
              { id: "0098", text: 'Do styling', isComplete: false },
            ]
          }
        ],
        error: "",
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using showError function from MDTP', () => {
      const mockDispatch = jest.fn()
      const mockError = "Something went wrong"
      const actionToDispatch = hasError(mockError)
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.showError(mockError)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch on fetchAllNotes from MDTP', () => {
      const mockDispatch = jest.fn()
      const mockUrl = "www.googlenotes.com"
      const actionToDispatch = fetchAllNotes(mockUrl)
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.fetchAllNotes(mockUrl)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  });

});
