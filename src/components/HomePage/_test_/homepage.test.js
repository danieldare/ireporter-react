import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../HomePage';

describe('<Homepage />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<HomePage />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
