import React from 'react';
import { ErrorPop, mapStateToProps } from './ErrorPop';
import { shallow } from 'enzyme';

describe('ErrorPop', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ErrorPop/>
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {

    it('should return a string', () => {
      const mockState = {
        error: 'Title is Required',
        allNotes: [
          { id: "123ABA", 
            title: 'Worf ToDo', 
            list: [
              { id: "123", text: 'Eat food', isComplete: false },
            ]
          },
          { id: "987GDGFD",
            title: 'Jake ToDo',
            list: [
              { id: "0098", text: 'Do styling', isComplete: false },
            ]
          }
        ]
      }; 
      const expected = {error: 'Title is Required'};

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    
  });
});
