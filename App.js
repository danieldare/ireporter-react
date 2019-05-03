import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import Route from './src/Route';

const App = () => (
  <Provider store={store}>
    <Header />
    <Route />
    <Footer />
  </Provider>
);

export default App;
