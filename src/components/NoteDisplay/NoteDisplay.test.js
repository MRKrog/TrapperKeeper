import React from 'react';
import NoteDisplay from './NoteDisplay';
import { shallow } from 'enzyme';

let mockId = "ZN9zKmsle"
let list = [
  { id: "BqkLJDU45", isComplete: false, text: "Item 2" },
  { id: "Not Complets", isComplete: true, text: "Item 3" }
]
let mockTitle = "Another 2";

describe('NoteDisplay', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NoteDisplay  id={mockId}
                    list={list}
                    title={mockTitle} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    const mockLongTitle = "THis is going to be a really long long title and this longer than than the max";
    const mockLongList = [
      { id: "BqkLJDU45", isComplete: false, text: "THis is going to be a really long long title and this longer than than the max" },
      { id: "Not Complets", isComplete: true, text: "Item 3" }
    ]
    wrapper = shallow(<NoteDisplay id={mockId} title={mockLongTitle} list={mockLongList} />)
  })

})
