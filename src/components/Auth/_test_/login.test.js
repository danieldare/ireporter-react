import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import Login from '../Login';
import { mockStore } from '../../../../test/setupTests.js';

const props = {
  auth: {
    error: 'segun',
    isLoading: false,
    login: jest.fn()
  }
};

describe('<Login /> rendering', () => {
  it('should match snapshot', () => {
    const store = mockStore(props);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
