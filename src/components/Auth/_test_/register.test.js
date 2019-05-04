import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Register from '../Register';

describe('<Register />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Register />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
