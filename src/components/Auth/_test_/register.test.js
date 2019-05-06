import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from '../Register';
import { mockStore } from '../../../../test/setupTests.js';

const props = {
  auth: {
    error: 'segun',
    isLoading: false,
    register: jest.fn()
  }
};

describe('<Register/> rendering', () => {
  it('should match snapshot', () => {
    const store = mockStore(props);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
