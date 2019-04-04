import React from 'react';
import { shallow } from 'enzyme';
import { NotesContainer } from './NotesContainer';

describe('NotesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotesContainer />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should call generateNotes when there are notes in the redux store', () => {

  })

  it('should return JSX when generateNotes is called', () => {
    console.log(wrapper.generateNotes);
    expect(wrapper.generateNotes).toMatchSnapshot();
  })

})
