import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from '../Profile';
import store from '../../../../store';
import mockRouterOptions from '../../../../test/__mocks__/mockRouter';

// describe('<App />', () => {
//   it('should match snapshot', () => {
//     const tree = shallow(<Profile />);
//     expect(tree).toMatchSnapshot();
//   });
// });

describe('<Profile />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
      mockRouterOptions
    );
  });

  it('should match snapshot', () => {
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
