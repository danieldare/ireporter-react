import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CreateIncident from '../createIncident';
import store from '../../../../store';
import mockRouterOptions from '../../../../test/__mocks__/mockRouter';

describe('<CreateIncident />', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<CreateIncident />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});

// describe('<CreateIncident />', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = mount(
//       <Provider store={store}>
//         <Router>
//           <CreateIncident />
//         </Router>
//       </Provider>,
//       mockRouterOptions
//     );
//   });

//   it('should match snapshot', () => {
//     const tree = toJSON(wrapper);
//     expect(tree).toMatchSnapshot();
//   });
// });
