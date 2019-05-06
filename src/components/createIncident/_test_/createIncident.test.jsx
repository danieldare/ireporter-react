import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CreateIncident from '../createIncident';
import { mockStore } from '../../../../test/setupTests.js';

const props = {
  post: {
    error: 'segun',
    isCreating: false,
    success: false,
    login: jest.fn()
  },
  profile: {
    posts: ''
  },
  match: {
    url: ''
  }
};

describe('<CreateIncident /> rendering', () => {
  it('should match snapshot', () => {
    const store = mockStore(props);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CreateIncident match={{ url: '' }} />
        </Router>
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
