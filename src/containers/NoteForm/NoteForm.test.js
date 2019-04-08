import React from 'react';
import { shallow } from 'enzyme';
import { NoteForm, mapStateToProps, mapDispatchToProps } from './NoteForm';
import NoteOptions from '../../components/NoteOptions/NoteOptions';
import { ListItem } from '../../components/ListItem/ListItem';
import { hasError } from '../../actions';
// import { render } from 'react-dom';
// jest.mock('react-dom');

import { fetchData } from '../../utility/fetchData';
jest.mock('../../utility/fetchData')

import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator';
jest.mock('../../utility/fetchOptionsCreator')

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

    it('should invoke findNote() if has a prop of noteId on componentDidMount', () => {
      const instance = wrapper.instance()
      jest.spyOn(instance, 'findNote')
      wrapper.instance().componentDidMount();
      expect(instance.findNote).toHaveBeenCalledWith(noteId)
    })

    it('should fire handleEnter when handleKeydown is invoked with the code is Enter', () => {
      const instance = wrapper.instance()
      const mockEvent = { code: 'Enter' }
      spyOn(instance, 'handleEnter')
      instance.handleKeydown(mockEvent)
      expect(instance.handleEnter).toHaveBeenCalledWith(mockEvent)
    })

    it('should fire handleEscape when handleKeydown is invoked with the code is Escape', () => {
      const mockEvent = { code: 'Escape' }
      const instance = wrapper.instance()
      spyOn(instance, 'handleEscape')
      instance.handleKeydown(mockEvent)
      expect(instance.handleEscape).toHaveBeenCalled()
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
      const fakeEvent = { preventDefault: () => {}};
      jest.spyOn(instance, 'handlePut')
      wrapper.instance().handleType(fakeEvent)
      expect(instance.handlePut).toHaveBeenCalled()
    })

    it('should call handlePost when handleType is invoked and has prop type of new-note', () => {
      const instance = wrapper.instance()
      const fakeEvent = { preventDefault: () => {} }
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
      const title = 'Jake ToDo';
      const list = [{ id: 'O6oYExG7Q', text: 'Do basic styling', isComplete: false }];

      await wrapper.instance().handlePut()
      expect(fetchOptionsCreator).toHaveBeenCalledWith('PUT', { title, list })
    })

    it('should call fetchData with the correct URL when handlPut is invoked', async () => {
      const mockUrl = "http://localhost:3001/api/v1/notes/O6oYExG7Q";
      await wrapper.instance().handlePut()
      expect(fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should change the state of toHomePage when handlePut is invoked', async () => {
      await wrapper.instance().handlePut()
      expect(wrapper.state('toHomePage')).toEqual(true)
    })

    it('should call hasError when fetchData fails when handlePut is invoked', async () => {
      fetchData.mockImplementationOnce(() => Promise.reject(new Error('Another Bad One yo!')))
      await wrapper.instance().handlePut()

      expect(mockHasError).toHaveBeenCalledWith('Another Bad One yo!')
    })

    it('should change state of title input when handleTitleChange is invoked', () => {
      const mockTitleEvent = { target: { name: 'title', value: 'This is Really Cool' } }
      wrapper.instance().handleTitleChange(mockTitleEvent)

      expect(wrapper.state('title')).toEqual('This is Really Cool')
    })

    it('should on invoking handleItemChange update the state of the list object to the new text and fire generateNewListItem with correct params', () => {
      wrapper.setState({
        list: [
          { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
          { id: "55ogax554", text: 'Do More CsS', isComplete: true },
        ]
      })
      const mockFoundItem = { id: "55ogax554", isComplete: true, text: "This is updated list text"}
      const mockEvent = { target: { name: 'list', value: 'This is updated list text' }, preventDefault: () => {} }
      const instance = wrapper.instance()
      spyOn(instance, 'generateNewListItem')
      instance.handleItemChange(mockEvent, '55ogax554', 1)
      expect(wrapper.state('list')).toEqual([
        { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
        { id: "55ogax554", text: 'This is updated list text', isComplete: true },
      ])
      expect(instance.generateNewListItem).toHaveBeenCalledWith(mockEvent, mockFoundItem)
    })

    it('should on invoking generateNewListItem invoke the method addItem', () => {
      wrapper.setState({
        list: [
          { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
          { id: "55ogax554", text: 'Do More CsS', isComplete: true },
          { id: "1234552f4", text: 'Javascript is cool', isComplete: false },
        ]
      })
      const mockEvent = { target: { value: 'M'}, preventDefault: () => {}}
      const mockFoundItem = { id: "1234552f4", text: 'Javascript is cool', isComplete: false }
      const instance = wrapper.instance()
      spyOn(instance, 'addItem');
      instance.generateNewListItem(mockEvent, mockFoundItem)
      expect(instance.addItem).toHaveBeenCalled();
    })

    it('should on invoking addItem add a new list item to the original state of list', () => {
      const instance = wrapper.instance()
      instance.addItem()
      expect(wrapper.state('list')).toHaveLength(2)
      expect(wrapper.state('list')).toEqual(
        [{"id": "O6oYExG7Q", "isComplete": false, "text": "Do basic styling"}, {"id": "12345789", "isComplete": false, "text": ""}]
      )
    })

    it('should on invoking deleteNote call fetchOptionsCreator', async () => {
      const mockEvent = { preventDefault: () => {} }
      await wrapper.instance().deleteNote(mockEvent)
      expect(fetchOptionsCreator).toHaveBeenCalledWith('DELETE', {})
    })

    it('should on invoking deleteNote call fetchData with the correct parameters', async () => {
      const mockEvent = { preventDefault: () => {} }
      const mockUrl = 'http://localhost:3001/api/v1/notes/O6oYExG7Q';
      await wrapper.instance().deleteNote(mockEvent)
      expect(fetchData).toHaveBeenCalledWith(mockUrl)
    })

    it('should on invoking deleteNote call fetchallNotes with the correct url and set the state of toHomePage to true', async () => {
      const mockEvent = { preventDefault: () => {} }
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      await wrapper.instance().deleteNote(mockEvent)
      expect(mockfetchAllNotes).toHaveBeenCalledWith(mockUrl)
    })

    it('should on invoking deleteNote with a bad request send the error correct message', async () => {
      fetchData.mockImplementationOnce(() => Promise.reject(new Error('Note not found')))
      const mockEvent = { preventDefault: () => {} }
      await wrapper.instance().deleteNote(mockEvent)
      expect(mockHasError).toHaveBeenCalledWith('note can not be deleted')
    })

    it('should on handleItemDelete splice the specific object out of the list array and then set state with the new info', () => {
      wrapper.setState({
        list: [
          { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
          { id: "55ogax554", text: 'Do More CsS', isComplete: true },
          { id: "1234552f4", text: 'Javascript is cool', isComplete: false },
        ]
      })
      const mockListAfter = [{ id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
      { id: "55ogax554", text: 'Do More CsS', isComplete: true }]

      const mockEvent = { preventDefault: () => {} }
      const instance = wrapper.instance();
      instance.handleItemDelete(mockEvent, '1234552f4')
      expect(wrapper.state('list')).toEqual(mockListAfter)
    })

    it('should on toggleComplete switch the status of isComplete', () => {
      const updatedItem = [{ id: 'O6oYExG7Q', text: 'Do basic styling', isComplete: true }]
      const instance = wrapper.instance();
      instance.toggleComplete('O6oYExG7Q')
      expect(wrapper.state('list')).toEqual(updatedItem)
    })

    it('should on handleSeperate return an object with complete and uncompleted items', () => {
      wrapper.setState({
        list: [
          { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
          { id: "55ogax554", text: 'Do More CsS', isComplete: true },
          { id: "1234552f4", text: 'Javascript is cool', isComplete: false },
        ]
      })
      const returnSeperate = {
        completed: {
          items: [ { id: '55ogax554', text: 'Do More CsS', isComplete: true } ]
        },
        uncompleted: {
          items: [
            { id: 'O6oYExG7Q', text: 'Do basic styling', isComplete: false },
            { id: '1234552f4', text: 'Javascript is cool', isComplete: false } ]
        }
      }
      const instance = wrapper.instance()
      expect(instance.handleSeperate()).toEqual(returnSeperate)
    })

    it('should on handleClose call hasError with an empty string', () => {
      const instance = wrapper.instance()
      instance.handleClose()
      expect(mockHasError).toHaveBeenCalledWith('')
    })

    it('should update match the snapshot when there is more list items in the list state', () => {
      wrapper.setState({
        list: [
          { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
          { id: "55ogax554", text: 'Do More CsS', isComplete: true },
          { id: "1234552f4", text: 'Javascript is cool', isComplete: false },
        ]
      })
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

    it('should return an object with the hasError message', () => {
      const mockState = {
        error: 'This is an Error Message',
        fitler: []
      }
      const expected = {
        error: 'This is an Error Message',
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })

  })


  describe('mapDispatchToProps', () => {

    it('should call dispatch with an hasError action when hasError is called', () => {
      // Setup
      const mockMessage = 'This is an error message';
      const mockDispatch = jest.fn();
      const actionToDispatch = hasError(mockMessage)

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.hasError(mockMessage)

      // Expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with an fetchAllNotes action when fetchAllNotes is called', () => {
      // Setup
      const mockUrl = 'http://google.com'
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchAllNotes(mockUrl)

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchAllNotes(actionToDispatch)

      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

})
