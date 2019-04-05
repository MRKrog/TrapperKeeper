import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { NoteForm } from '../NoteForm/NoteForm';
import { NotesContainer } from '../NotesContainer/NotesContainer';
import { mapStateToProps, mapDispatchToProps } from './App';

const mockNotes = [{name: 'Luke', favorite: true}, {name: 'Han Solo', favorite: false}]

describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockStoreAllNotes;

    beforeEach(() => {
      mockStoreAllNotes = jest.fn()
      wrapper = shallow(<App fetchAllNotes={mockStoreAllNotes} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it("should invoke the function storeAllNotes on componentDidMount", async () => {
      wrapper.instance().componentDidMount()
      expect(fetchAllNotes).toHaveBeenCalled()
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
