import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ViewIncident from '../viewIncident';
import store from '../../../../store';
import mockRouterOptions from '../../../../test/__mocks__/mockRouter';

describe('<Profile />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <ViewIncident />
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
