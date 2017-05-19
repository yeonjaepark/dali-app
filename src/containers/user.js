import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class User extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userID);
  }

  render() {
    return (
      <div id="profile">
        <img src={this.props.user.picture} alt="" />
        <div id="profile-info">
          <div id="name"> Name: {this.props.user.author_name} </div>
          <div id="email"> Email: {this.props.user.email} </div>
        </div>
      </div>
    );
  }
}
// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    user: state.users.user,
  }
);


export default withRouter(connect(mapStateToProps, actions)(User));
