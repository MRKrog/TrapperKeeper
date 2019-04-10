import React from 'react';
import { shallow } from 'enzyme';
import { ListItem } from './ListItem';

describe('ListItem', () => {
  let wrapper;

  let mockItem = {
    id: "1234",
    isComplete: false,
    text: "Add basic styling"
  }
  const mockIndex = 0
  const mockId = "123232"
  let mockisComplete = false
  const mockHandleItemChange = jest.fn()
  const mockHandleItemDelete = jest.fn()
  const mockToggleComplete = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <ListItem
        item={mockItem}
        id={mockId}
        isComplete={mockisComplete}
        index={mockIndex}
        toggleComplete={mockToggleComplete}
        handleItemChange={mockHandleItemChange}
        handleItemDelete={mockHandleItemDelete}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleComplete when the checkbox is checked', () => {
    let input = wrapper.find('.CheckBox')
    input.simulate('click')
    expect(mockToggleComplete).toHaveBeenCalledWith(mockId)
  })

  it('should call handleItemChange when list item input is changed', () => {
    let input = wrapper.find('.list-item-input')
    input.simulate('change')
    expect(mockHandleItemChange).toHaveBeenCalled()
  })

  it('should call handleItemDelete when the delete button is clicked', () => {
    let button = wrapper.find('.delete-button')
    button.simulate('click')
    expect(mockHandleItemDelete).toHaveBeenCalled()
  })

  it('should match the snapshot when an item isCompleted', () => {
    wrapper = shallow(<ListItem isComplete={true} />)
    expect(wrapper).toMatchSnapshot()
  })
})
