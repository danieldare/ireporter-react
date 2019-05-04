import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header';

describe('<Header />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Header />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
