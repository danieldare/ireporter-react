import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../Dashboard';

describe('<Dashboard />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Dashboard />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
