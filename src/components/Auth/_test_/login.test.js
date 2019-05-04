import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Login from '../Login';

describe('<App />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Login />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
