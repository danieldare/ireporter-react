import React from 'react';
import { Provider } from 'react-redux';
import { css } from 'glamor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import Route from './src/Route';
import './style.css';

const App = () => (
  <Provider store={store}>
    <div>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        newestOnTop={false}
        bodyClassName={css({
          fontFamily: 'Nunito',
          fontSize: '13px',
          textAlign: 'center'
        })}
        progressClassName={css({
          height: '3px'
        })}
      />
      <Header />
      <Route />
      <Footer />
    </div>
  </Provider>
);
export default App;
