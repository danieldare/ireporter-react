import React from 'react';
import { Provider } from 'react-redux';
import { css } from 'glamor';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import store from './store';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import Route from './src/Route';
import { setCurrentUser, logout } from './src/actions/actionCreators/auth';
import './style.css';

if (localStorage.token) {
  const token = decode(localStorage.token);
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
