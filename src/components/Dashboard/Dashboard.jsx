import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const dashboard = props => (
  <div className="container">
    <div className="title-user">
      <span className="user-info2">My Dashboard</span> <br />
      <small id="username">
        Welcome, {props.auth.isAuthenticated ? props.auth.user.email : 'guest'}
      </small>
    </div>
    <hr />
    <div className="main-section">
      <p className="left-head">
        Tell Us About it, <br />
        <span>We can build a better Nation</span>
      </p>
      <div>
        <div className="card">
          <div className="card-title">
            <p>Red Flag</p>
          </div>
          <div className="card-img" />
          <div className="card-body">
            <small className="bold">Description:</small>
            <p className="mt-1">
              You can tell us about an incident linked to corruption e.g bribery
              case, fraud. e.t.c
            </p>
            <Link to="/create-redflag" className="btnn btn-dark mt-1">
              Create redflag
            </Link>
          </div>
        </div>
        <Link to="/view-redflag" className="link btn-dark">
          View Red-flag Record
        </Link>
      </div>
      <div>
        <div className="card">
          <div className="card-title">
            <p>Intervention</p>
          </div>
          <div className="card-second-img" />
          <div className="card-body">
            <small className="bold">Description:</small>
            <p className="mt-1">
              A call for a government agency to intervene e.g repair bad road
              sections, collapsed bridges. e.t.c
            </p>
            <Link to="/create-intervention" className="btnn btn-brown mt-1">
              Create Intervention
            </Link>
          </div>
        </div>
        <Link to="/view-intervention" className="link2">
          View Intervention Record
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(dashboard);
