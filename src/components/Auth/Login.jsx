import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import InputField from '../InputFields/InputField';
import { login } from '../../actions/actionCreators/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
    msg: '',
    errObj: ''
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (typeof error === 'string') {
        this.setState({ msg: error });
      } else if (typeof error === 'object') {
        this.setState({ errObj: error });
      } else {
        this.setState({ msg: '', errObj: '' });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };
    this.props.login(user, this.props.history);
  };

  focusDelete = target => {
    const prevMsg = this.state.msg;
    const prevErrObj = this.state.errObj;
    delete prevMsg[target];
    delete prevErrObj[target];
    this.setState({ msg: prevMsg });
  };

  render() {
    const { email, password, errObj } = this.state;
    const { isLoading, error } = this.props;

    return (
      <div className="form-container">
        {isLoading ? <div className="overlay-loading" /> : ''}
        <h4 className="form-title">Kindly Register Below</h4>
        <form className="form" onSubmit={this.onSubmit} noValidate>
          <InputField
            name="email"
            type="email"
            placeholder="email address"
            value={email}
            onChange={this.onChange}
            error={errObj !== null && errObj.email}
            classname={errObj !== null && errObj.email ? ' danger' : ''}
            focus={e => this.focusDelete(e.target.name)}
          />
          <InputField
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={this.onChange}
            error={errObj !== null && errObj.password}
            classname={errObj !== null && errObj.password ? ' danger' : ''}
            focus={e => this.focusDelete(e.target.name)}
          />
          <button className="btn--auth" type="submit">
            {isLoading ? <span className="spinner" /> : 'Login'}
          </button>
        </form>
        <p className="account-not">
          Don't have an account? <Link to="/register">Kindly Register</Link>
        </p>
        <img
          src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
          className="login__img"
          alt="img"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading
});

Login.propTypes = {
  error: PropTypes.shape().isRequired,
  isLoading: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Login));
