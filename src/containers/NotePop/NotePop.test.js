import React from 'react';
import { ErrorPop, mapStateToProps } from './NotePop';
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
      const mockState = {error: 'Title is Required'}; 
      const expected = {error: 'Title is Required'};

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    
  });
});
