import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/actionCreators/auth';

const Logout = props => {
    return (
        <Fragment>
            <Link to="#h" className="navlink" onClick={props.logout}>
                Logout
            </Link>
        </Fragment>
    );
};

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(
    null,
    { logout }
)(Logout);
