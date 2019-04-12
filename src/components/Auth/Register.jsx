import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import InputField from '../InputFields/InputField';
import { register } from '../../actions/authActions';

class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    othernames: '',
    phonenumber: '',
    email: '',
    password: '',
    password2: '',
    msg: {}
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.errors });
      } else {
        this.setState({ mgs: null });
      }
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.msg !== this.props.error) {
  //     // Perform some operation
  //     this.setState({ msg: nextProps.error.msg.errors });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.error !== prevState.msg) {
  //     return { msg: nextProps.error.msg.errors };
  //   }
  //   return null;
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      username,
      othernames,
      phonenumber,
      email,
      password,
      password2
    } = this.state;

    const newUser = {
      firstname,
      lastname,
      username,
      othernames,
      phonenumber,
      email,
      password,
      password2
    };

    this.setState({ isLoading: true });
    this.props.register(newUser, this.props.history);
    this.setState({ isLoading: false });
  };

  onFocusClear = target => {
    const prevMsg = { ...this.state.msg };
    delete prevMsg[target];
    this.setState({ msg: prevMsg });
  };

  render() {
    const {
      firstname,
      lastname,
      username,
      othernames,
      phonenumber,
      email,
      password,
      password2,
      msg
    } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        {/* <ToastContainer autoClose={2000} /> */}
        {isLoading ? <div className="overlay-loading" /> : ''}
        <div className="form-container">
          <h4 className="form-title">Kindly Register Below</h4>

          <form className="form" onSubmit={this.onSubmit} noValidate>
            <InputField
              name="firstname"
              type="text"
              placeholder="first name"
              value={firstname}
              onChange={this.onChange}
              error={msg.firstname}
              classname={msg.firstname ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />
            <InputField
              name="lastname"
              type="text"
              placeholder="last name"
              value={lastname}
              onChange={this.onChange}
              error={msg.lastname}
              classname={msg.lastname ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />

            <InputField
              name="othernames"
              type="text"
              placeholder="other names"
              value={othernames}
              onChange={this.onChange}
              error={msg.othernames}
              classname={msg.othernames ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />

            <InputField
              name="username"
              type="text"
              placeholder="user name"
              value={username}
              onChange={this.onChange}
              error={msg.username}
              classname={msg.username ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />

            <InputField
              name="phonenumber"
              type="number"
              placeholder="phonenumber"
              value={phonenumber}
              onChange={this.onChange}
              error={msg.phonenumber}
              classname={msg.phonenumber ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />
            <InputField
              name="email"
              type="email"
              placeholder="email address"
              value={email}
              onChange={this.onChange}
              error={msg.email}
              classname={msg.email ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />
            <InputField
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={this.onChange}
              error={msg.password}
              classname={msg.password ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />
            <InputField
              name="password2"
              type="password"
              placeholder="password"
              value={password2}
              onChange={this.onChange}
              error={msg.password2}
              classname={msg.password2 ? ' danger' : ''}
              focus={e => this.onFocusClear(e.target.name)}
            />

            <button className="btn--auth" type="submit">
              {isLoading ? <span className="spinner" /> : 'Register'}
            </button>
          </form>
          <p className="account-not">
            Already registered? <Link to="/login">Kindly Login</Link>
          </p>
          <img
            src="https://res.cloudinary.com/decqfpglp/image/upload/v1550621617/warning.png"
            className="login__img"
            alt="img"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.auth.isLoading
});

export default connect(
  mapStateToProps,
  { register }
)(withRouter(Register));
