import React from 'react';
import { shallow } from 'enzyme';
import NoteOptions from './NoteOptions';


describe('NoteOptions', () => {
  let wrapper;

  const mockHandleType = jest.fn()
  const mockDeleteNote = jest.fn()
  const mockHandleClose = jest.fn()
  const mockChangeColor = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<NoteOptions handleType={mockHandleType}
                                   deleteNote={mockDeleteNote}
                                   handleClose={mockHandleClose}
                                   changeColor={mockChangeColor}
                                   type="existing-note"
                                   title="A Title"
                                  />)
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

  it('should call changeColor when the yellow color button is clicked', () => {
    wrapper.find('.Color.Yellow').simulate('click')
    expect(mockChangeColor).toHaveBeenCalled()
  })

  it('should call changeColor when the yellow color button is clicked', () => {
    wrapper.find('.Color.Yellow').simulate('click')
    expect(mockChangeColor).toHaveBeenCalled()
  })

  it('should call changeColor when the green color button is clicked', () => {
    wrapper.find('.Color.Green').simulate('click')
    expect(mockChangeColor).toHaveBeenCalled()
  })

  it('should call changeColor when the purple color button is clicked', () => {
    wrapper.find('.Color.Purple').simulate('click')
    expect(mockChangeColor).toHaveBeenCalled()
  })

})
