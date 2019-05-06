import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import ViewIncident from '../viewIncident';
import { mockStore } from '../../../../test/setupTests.js';

const props = {
  Records: {
    Records: 'records',
    incidents: []
  }
};

describe('<ViewIncident /> rendering', () => {
  it('should render without crashing', () => {
    const store = mockStore(props);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ViewIncident />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
