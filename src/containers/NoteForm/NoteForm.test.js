import React from 'react';
import { shallow } from 'enzyme';
import { NoteForm, mapStateToProps, mapDispatchToProps } from './NoteForm';
import { hasError } from '../../actions';

import { fetchData } from '../../utility/fetchData';
jest.mock('../../utility/fetchData')

import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator';
jest.mock('../../utility/fetchOptionsCreator')

import { fetchAllNotes } from '../../thunks/fetchAllNotes';
jest.mock('../../thunks/fetchAllNotes');

import shortid from 'shortid';
jest.mock('shortid')
shortid.mockReturnValue("12345789")
window.alert = jest.fn()

let mockId = "O6oYExG7Q";
let noteId = "O6oYExG7Q";
let mockTitle = "Testing Note";
let mockType = "existing-note";


describe('NoteForm', () => {

  describe('NoteForm Component', () => {
    let wrapper;
    let mockfetchAllNotes = jest.fn()
    let mockHasError = jest.fn()
    let mockHasLoading = jest.fn()

    const mockNote = [
      {
        id: "987GDGFD",
        title: 'Jake ToDo',
        background: '#FFE680',
        list: [
        { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
      ]
      }
    ];

    let mockFetchedNote = {
      id: "987GDGFD",
      title: 'Jake ToDo',
      background: '#FFE680',
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
                                  isLoading={mockHasLoading}
                        />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have the default state properties', () => {
      wrapper = shallow(<NoteForm people={['name']}/>, { disableLifecycleMethods: true })
      expect(wrapper.state()).toEqual({
        title: '',
        background: '#FFE680',
        list: [{
                id: "12345789",
                isComplete: false,
                text: ""
              }],
        toHomePage: false,
        displayError: false,
      })
    })

    it('should invoke findNote() if has a prop of noteId on componentDidMount', () => {
      const instance = wrapper.instance()
      jest.spyOn(instance, 'findNote')
      wrapper.instance().componentDidMount();
      expect(instance.findNote).toHaveBeenCalledWith(noteId)
    })

    it('should fire handleEscape when handleKeydown is invoked with the code is Escape', () => {
      const mockEvent = { code: 'Escape' };
      const instance = wrapper.instance();
      instance.handleKeydown(mockEvent);
      expect(wrapper.state('toHomePage')).toEqual(true);
    })

    it('should invoke fetchData and change the state to the mockData when findNote() is called', async () => {
      let mockUrl = "http://localhost:3001/api/v1/notes/O6oYExG7Q";

      fetchData.mockImplementationOnce(() => Promise.resolve(mockFetchedNote))
      await wrapper.instance().findNote();
      expect(fetchData).toHaveBeenCalledWith(mockUrl)
      expect(wrapper.state('title')).toEqual('Jake ToDo')
      expect(wrapper.state('list')).toEqual([{ id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false }])
    })

    it('should throw an error if fetchData is rejected in when the findNote() method is invoked and change its state', async () => {
      fetchData.mockImplementationOnce(() => Promise.reject(new Error('Note was not found')))

      await wrapper.instance().findNote()
      expect(mockHasError).toHaveBeenCalledWith('Note was not found')
      expect(wrapper.state('displayError')).toEqual(true)
    })

    it('should call handlePostandPut when handleType is invoked and has prop type of existing-note', () => {
      const instance = wrapper.instance();
      const fakeEvent = { preventDefault: () => {}};
      jest.spyOn(instance, 'handlePostandPut')
      wrapper.instance().handleType(fakeEvent)
      expect(instance.handlePostandPut).toHaveBeenCalledWith('existing-note')
    })

    it('should call handlePostandPut when handleType is invoked and has prop type of new-note', () => {
      const instance = wrapper.instance()
      const fakeEvent = { preventDefault: () => {} }
      jest.spyOn(instance, 'handlePostandPut');
      wrapper.setProps({ type: "new-note" })
      instance.handleType(fakeEvent)
      expect(instance.handlePostandPut).toHaveBeenCalledWith('new-note');
    })

    it('should call fetchOptionsCreator upon invoking handle post and return POST and title and list object', async () => {
      const title = 'Jake ToDo';
      const list = [{ id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false }]
      const background = '#FFE680';

      await wrapper.instance().handlePostandPut('new-note');
      expect(fetchOptionsCreator).toHaveBeenCalledWith('POST', { title, list, background })
    })

    it('shoud call fetchData when handlePostandPut is invoked with existing-note with the correct url and options', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes/O6oYExG7Q';
      await wrapper.instance().handlePostandPut('existing-note')
      const mockOptions = await fetchOptionsCreator('PUT')
      expect(fetchData).toHaveBeenCalledWith(mockUrl, mockOptions)
    })

    it('shoud call fetchData when handlePostandPut is invoked with new-note with the correct url and options', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      await wrapper.instance().handlePostandPut('new-note')
      const mockOptions = await fetchOptionsCreator('POST')
      expect(fetchData).toHaveBeenCalledWith(mockUrl, mockOptions)
    })

    it('should call fetchAllNotes with the mockUrl when handlePostandPut is invoked and change the state of toHomePage', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/notes';
      await wrapper.instance().handlePostandPut('new-note');

      expect(mockfetchAllNotes).toHaveBeenCalledWith(mockUrl)
      expect(wrapper.state('toHomePage')).toEqual(true)
    })

    it('should call hasError when handlePostandPut is invoked with a bad request', async () => {
      fetchData.mockImplementationOnce(() => Promise.reject(new Error('Note Cannot Be Saved')))
      const spy = spyOn(wrapper.instance(), 'displayWindowAlert')
      await wrapper.instance().handlePostandPut()
      expect(mockHasError).toHaveBeenCalledWith('Note Cannot Be Saved')
      expect(spy).toHaveBeenCalled()
    })

    it('should call fetchOptionsCreator with the correct params when handlePostandPut is invoked', async () => {
      const title = 'Jake ToDo';
      const list = [{ id: 'O6oYExG7Q', text: 'Do basic styling', isComplete: false }];
      const background = '#FFE680';

      await wrapper.instance().handlePostandPut()
      expect(fetchOptionsCreator).toHaveBeenCalledWith('PUT', { title, list, background })
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
      expect(mockHasError).toHaveBeenCalledWith('Note was not found')
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

    it('should on handleSeparate return an object with complete and uncompleted items', () => {
      wrapper.setState({
        list: [
          { id: "O6oYExG7Q", text: 'Do basic styling', isComplete: false },
          { id: "55ogax554", text: 'Do More CsS', isComplete: true },
          { id: "1234552f4", text: 'Javascript is cool', isComplete: false },
        ]
      })
      const returnSeparate = {
        completedItems: [ { id: '55ogax554', text: 'Do More CsS', isComplete: true } ],
        incompletedItems: [
            { id: 'O6oYExG7Q', text: 'Do basic styling', isComplete: false },
            { id: '1234552f4', text: 'Javascript is cool', isComplete: false } ]
      }
      const instance = wrapper.instance()
      expect(instance.handleSeparate()).toEqual(returnSeparate)
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

    it('should update the background state with the name of the color', () => {
      const mockEvent = { target: { name: '#agedr44' } }
      wrapper.instance().changeColor(mockEvent)
      expect(wrapper.state('background')).toEqual('#agedr44')
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
