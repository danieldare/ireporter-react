import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../Auth/Logout';

const authLinks = (
  <Fragment>
    <li className="header__item">
      <Link to="/profile" className="navlink">
        Profile
      </Link>
    </li>
    <li className="header__item">
      <Link to="/dashboard" className="navlink">
        Dashboard
      </Link>
    </li>
    <li className="header__item">
      <Logout />
    </li>
  </Fragment>
);

const guestLinks = (
  <Fragment>
    <li className="header__item">
      <Link to="/login" className="navlink">
        Login
      </Link>
    </li>
    <li className="header__item">
      <Link to="/register" className=" navlink">
        Register
      </Link>
    </li>
  </Fragment>
);

const Header = props => (
  <div>
    <img
      src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
      className="header__img"
      alt="img"
    />
    <header className="header">
      <Link to="/" className="header__brand-link">
        <span className="header__brand">iReporter</span>
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
          <i className="fas fa-bars" />
        </button>
        <div className="dropdown-content">
          {props.auth.isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
      <ul className="header__item-list">
        {props.auth.isAuthenticated ? authLinks : guestLinks}
      </ul>
    </header>
  </div>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
