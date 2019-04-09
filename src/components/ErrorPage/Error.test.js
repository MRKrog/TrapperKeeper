import React from 'react';
import { ErrorPage } from './ErrorPage';
import { shallow } from 'enzyme';

describe('Error', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorPage />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
