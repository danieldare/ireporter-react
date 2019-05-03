import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const guestLinks = (
  <div>
    <Link to="/login" className="btn btn-login btn--animated ">
      Login
    </Link>
    <Link to="/register" className="btn btn-register btn--animated ">
      Register
    </Link>
  </div>
);

const authLinks = (
  <Link to="/dashboard" className="btn btn-login btn--animated ">
    My Dashboard
  </Link>
);

const HomePage = props => (
  <div>
    <section className="homepage-container">
      <div className="bg-img">
        <div className="container">
          <h1 className="homepage__title">iReporter</h1>
          <p className="homepage__tag">
            Let's build a better nation
            <mark className="highlight">together</mark>
          </p>
          <div className="homepage__brief">
            iReporter enables any/every citizen to bring any form of corruption
            to the notice of appropriate authorities and the general public.
            Users can also report on things that needs government intervention
          </div>
          <div>{props.auth.isAuthenticated ? authLinks : guestLinks}</div>
        </div>
      </div>
    </section>

    <div className="how-it-works-title">How it works</div>
    <section className="how-it-works container">
      <div className="how-it-work">
        <p className="how-it-work-num">1</p>
        <div className="how-it-work-brief">
          Create and submit a red flag or intervention report.
        </div>
      </div>
      <div className="how-it-work">
        <p className="how-it-work-num">2</p>
        <div className="how-it-work-brief">
          Reports are submitted to the appropriate authority and processed.
        </div>
      </div>
      <div className="how-it-work">
        <p className="how-it-work-num">3</p>
        <div className="how-it-work-brief">
          Report are reviewed and a real time email is sent to owner of the
          record upon completion of the reviews.
        </div>
      </div>
    </section>
    <section className="relevant">
      <p className="relevant-content">MAKE YOUR VOICE RELEVANT</p>
    </section>
  </div>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(HomePage);
