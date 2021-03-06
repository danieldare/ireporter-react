import React from 'react';
import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../src/app';
import Routes from '../src/Route';

const wrapper = mount(<App />);
describe('<App/> rendering', () => {
  it('should render one <Routes> component', () => {
    expect(wrapper.find(Routes)).toHaveLength(1);
  });

  it('matches the snapshot', () => {
    const tree = mount(<App />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
