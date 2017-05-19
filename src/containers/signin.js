import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.emailHandle = this.emailHandle.bind(this);
    this.passwordHandle = this.passwordHandle.bind(this);
  }

  onSubmitHandle(event) {
    event.preventDefault();
    if (this.state.email !== '' && this.state.password !== '') {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      this.props.signinUser(user, this.props.history);
      this.setState({ email: '', password: '' });
    }
  }

  emailHandle(event) {
    this.setState({ email: event.target.value });
  }

  passwordHandle(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div id="forms-page">
        <div> Sign In </div>
        <form onSubmit={this.onSubmitHandle} >
          <input onChange={this.emailHandle} value={this.state.email} type="text" placeholder="Email" />
          <input onChange={this.passwordHandle} value={this.state.password} type="text" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(null, actions)(SignIn));