import React from 'react';
import { shallow } from 'enzyme';
import { NoteForm, mapStateToProps, mapDispatchToProps } from './NoteForm';

// import { render } from 'react-dom';
// jest.mock('react-dom');

import { fetchData } from '../../utility/fetchData';
jest.mock('../../utility/fetchData')

import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator';
jest.mock('../../utility/fetchOptionsCreator')

import { hasError } from '../../actions';
import { fetchAllNotes } from '../../thunks/fetchAllNotes';
jest.mock('../../thunks/fetchAllNotes');

import shortid from 'shortid';
jest.mock('shortid')
shortid.mockReturnValue("12345789")

let mockId = "O6oYExG7Q";
let noteId = "O6oYExG7Q";
let mockTitle = "Testing Note";
let mockType = "existing-note";


describe('NoteForm', () => {

  describe('NoteForm Component', () => {
    let wrapper;
    let mockfetchAllNotes = jest.fn()
    let mockHasError = jest.fn()

    const mockNote = [
      {
        id: "987GDGFD",
        title: 'Jake ToDo',
        list: [
        { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
      ]
      }
    ];

    let mockFetchedNote = {
      id: "987GDGFD",
      title: 'Jake ToDo',
      list: [
        { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
      ]
    }

    // mockfetchAllNotes = jest.fn().mockImplementation(() => Promise.resolve({results: mockAllNotes}))

    beforeEach(() => {
      fetchData.mockImplementation(() => Promise.resolve(mockFetchedNote))


      wrapper = shallow(<NoteForm type={mockType}
                                  noteId={noteId}
                                  id={mockId}
                                  title={mockTitle}
                                  fetchAllNotes={mockfetchAllNotes}
                                  hasError={mockHasError}
                        />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have the default state properties', () => {
      wrapper = shallow(<NoteForm people={['name']}/>, { disableLifecycleMethods: true })
      expect(wrapper.state()).toEqual({
        title: '',
        list: [{
                id: "12345789",
                isComplete: false,
                text: ""
              }],
        toHomePage: false,
        errorPage: false,
      })
    })

    it('should invole findNote() if has a prop of noteId on componentDidMount', () => {
      const instance = wrapper.instance()
      jest.spyOn(instance, 'findNote')
      wrapper.instance().componentDidMount();
      expect(instance.findNote).toHaveBeenCalledWith(noteId)
    })

    it('should invoke fetchData and change the state to the mockData when findNote() is called', async () => {
      let mockUrl = "http://localhost:3001/api/v1/notes/O6oYExG7Q";

      fetchData.mockImplementationOnce(() => Promise.resolve(mockFetchedNote))
      await wrapper.instance().findNote();
      expect(fetchData).toHaveBeenCalledWith(mockUrl)
      expect(wrapper.state('title')).toEqual('Jake ToDo')
      expect(wrapper.state('list')).toEqual([{ id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false }])
    })

    it('should change state of toHomePage to true when handleEscape is invoked', () => {
      wrapper.instance().handleEscape()
      expect(wrapper.state('toHomePage')).toEqual(true)
    })

    it('should throw an error if fetchData is rejected in when the findNote() method is invoked and change its state', async () => {
      fetchData.mockImplementationOnce(() => Promise.reject(new Error('Note was not found')))

      await wrapper.instance().findNote()
      expect(mockHasError).toHaveBeenCalledWith('Note was not found')
      expect(wrapper.state('errorPage')).toEqual(true)
    })

    it('should call handlePut when handleType is invoked and has prop type of existing-note', () => {
      const instance = wrapper.instance();
      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      jest.spyOn(instance, 'handlePut')
      wrapper.instance().handleType(fakeEvent)
      expect(instance.handlePut).toHaveBeenCalled()
    })

    it('should call handlePost when handleType is invoked and has prop type of new-note', () => {
      const instance = wrapper.instance()
      const fakeEvent = { preventDefault: () => console.log('preventDefault mock') }
      jest.spyOn(instance, 'handlePost');
      wrapper.setProps({ type: "new-note" })
      instance.handleType(fakeEvent)
      expect(instance.handlePost).toHaveBeenCalled()
    })

    it('should call fetchOptionsCreator upon invoking handle post and return POST and title and list object', async () => {
      const title = 'Jake ToDo';
      const list = [{ id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false }]

      await wrapper.instance().handlePost()
      expect(fetchOptionsCreator).toHaveBeenCalledWith('POST', { title, list })
    })

    it('shoud call fetchData with the correct url and options', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      // const options = '';
      await wrapper.instance().handlePost()
      const mockOptions = await fetchOptionsCreator('POST')
      expect(fetchData).toHaveBeenCalledWith(mockUrl, mockOptions)


    })

    it('should call fetchAllNotes with the mockUrl when handlePost is invoked and change the state of toHomePage', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      await wrapper.instance().handlePost()

      expect(mockfetchAllNotes).toHaveBeenCalledWith(mockUrl)
      expect(wrapper.state('toHomePage')).toEqual(true)
    })

    it('should call hasError when handlePost is invoked with a bad request', async () => {
      fetchData.mockImplementationOnce(() => Promise.reject(new Error('Bad Request Yo')))

      await wrapper.instance().handlePost()
      expect(mockHasError).toHaveBeenCalledWith('Bad Request Yo')
    })

    it('should call fetchOptionsCreator with the correct params when handPut is invoked', async () => {
      const mockUrl = "http://localhost:3001/api/v1/notes/O6oYExG7Q";
      await wrapper.instance().handlePut()


    })



    it('', () => {
      // const result = wrapper.instance().getListItems();
      // expect(result.length).toBe(2);
      //
      //
      // wrapper.instance().updateNoteItems(mockNoteItems, 1);
      // expect(wrapper.state('noteItems')).toEqual(mockNoteItems);
      // expect(wrapper.state('currentFocus')).toEqual(1);
    })



  })


  describe('mapStateToProps', () => {

    it('should', () => {

    })

  })


  describe('mapDispatchToProps', () => {
    it('should', () => {

    })
  })



})
