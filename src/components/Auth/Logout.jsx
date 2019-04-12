import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

class Logout extends Component {
  state = {};

  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <Link
          to="#hjdhdh"
          className="header__item-link "
          onClick={this.props.logout}
        >
          Logout
        </Link>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
