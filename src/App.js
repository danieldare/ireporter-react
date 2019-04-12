import React from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import { css } from 'glamor';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Route from './components/Route/Route';
import store from './store';
import { setCurrentUser, logout } from './actions/authActions';
import './style.css';

if (localStorage.token) {
  const token = decode(localStorage.token);
  store.dispatch(setCurrentUser(token));
  const decoded = store.dispatch(setCurrentUser(token));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logout());
    // Redirect to login
    window.location.href = '/login';
  }
}

const App = () => (
  <Provider store={store}>
    <div>
      <ToastContainer
        autoClose={2000}
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
