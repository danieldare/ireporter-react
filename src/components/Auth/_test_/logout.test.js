import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logout from '../Logout';

describe('<Logout />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Logout />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
