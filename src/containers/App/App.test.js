import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';

const mockNotes = [{name: 'Luke', favorite: true}, {name: 'Han Solo', favorite: false}]

describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockStoreAllNotes;

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
  }];

    beforeEach(() => {
      mockStoreAllNotes = jest.fn().mockImplementation(() => Promise.resolve({results: mockAllNotes}))
      wrapper = shallow(<App fetchAllNotes={mockStoreAllNotes} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it("should invoke the function storeAllNotes on componentDidMount", async () => {
      const appInstance = wrapper.instance()
      appInstance.componentDidMount()
      expect(appInstance.fetchAllNotes).toBeCalled()
    });

    it("should call storeAllNotes with expected url", async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      wrapper.instance().componentDidMount()
      expect(fetchAllNotes).toHaveBeenCalledWith(mockUrl)
    })

  })

  describe('mapStateToProps', () => {

    it('should have default state properties', () => {
      const mockData = {
        error: '',
        allNotes: [],
        filter: [],
      }
      const expected = {
        error: '',
        allNotes: [],
      }
      const mockProps = mapStateToProps(mockData)
      expect(mockProps).toEqual(expected)
    })

  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch fetchNotes', () => {
      const mockDispatch = jest.fn()
      const actionsToDispatch = storeAllNotes(mockNotes)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.storeAllNotes(mockNotes)

      expect(mockDispatch).toHaveBeenCalledWith(actionsToDispatch)
    })

  })

})
