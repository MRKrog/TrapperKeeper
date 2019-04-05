import React from 'react';
import { shallow } from 'enzyme';
import { NoteForm } from './NoteForm';

const mockShortid = jest.fn().mockReturnValue('12345789');

let mockNote = { id: mockShortid,
  title: 'Worf ToDo',
  list: [
    { id: mockShortid,
      text: 'Eat food',
      isComplete: false
    },
  ]
};

describe('NoteForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteForm type="existing-note" noteId={mockShortid} {...mockNote}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  

})
