import React from 'react';
import NoteDisplay from './NoteDisplay';
import { shallow } from 'enzyme';

let mockId = "ZN9zKmsle"
let list = [{ id: "BqkLJDU45", isComplete: false, text: "Item 2" }]
let mockTitle = "Another 2";




describe('NoteDisplay', () => {
  let wrapper;
  let mockList = []

  beforeEach(() => {
    wrapper = shallow(<NoteDisplay id={mockId}
                                   list={list}
                                   title={mockTitle} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
