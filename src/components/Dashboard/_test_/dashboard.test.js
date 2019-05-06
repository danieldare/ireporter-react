import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from '../Dashboard';
import { mockStore } from '../../../../test/setupTests.js';

const props = {
  auth: {
    isAuthenticated: false,
    user: {
      email: 'abc@example.com'
    }
  }
};

describe('<Register/> rendering', () => {
  it('should render without crashing', () => {
    const store = mockStore(props);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
