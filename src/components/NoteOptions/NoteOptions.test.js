import React from 'react';
import { shallow } from 'enzyme';
import NoteOptions from './NoteOptions';


describe('NoteOptions', () => {
  let wrapper;

  const mockHandleType = jest.fn()
  const mockDeleteNote = jest.fn()
  const mockHandleClose = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<NoteOptions handleType={mockHandleType} deleteNote={mockDeleteNote} handleClose={mockHandleClose} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleType when the save button is clicked', () => {
    wrapper.find('.Note-Save').simulate('click')
    expect(mockHandleType).toHaveBeenCalled()
  })

  it('should call deleteNote when the delete button is clicked', () => {
    wrapper.find('.Note-Delete').simulate('click')
    expect(mockDeleteNote).toHaveBeenCalled()
  })

  it('should call handleClose when the close note button is clicked', () => {
    wrapper.find('.Note-Close').simulate('click')
    expect(mockHandleClose).toHaveBeenCalled()
  })
})