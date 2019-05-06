import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import ViewSingleRecord from '../viewSingleRecord';
import { mockStore } from '../../../../test/setupTests.js';

const props = {
  singleRecord: {
    Records: 'records',
    viewOne: {
      images: 'a,b'
    },
    incidents: [],
    isFetching: false
  }
};

describe('<SingleIncident /> rendering', () => {
  it('should render without crashing', () => {
    const store = mockStore(props);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ViewSingleRecord />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
