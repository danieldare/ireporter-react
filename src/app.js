import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { css } from 'glamor';
import decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import './appcss';
import store from '../store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Route from './Route';
import { setCurrentUser, logout } from './actions/actionCreators/auth';

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
        <Router>
            <Fragment>
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
            </Fragment>
        </Router>
    </Provider>
);
export default App;
