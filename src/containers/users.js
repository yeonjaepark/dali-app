import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions';

class Users extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const allUsers = this.props.users.map((user) => {
      return (
        <Link className="links" to={`/users/${user.id}`} id="post" key={user.id}>
          <img src={user.picture} alt="" />
          <div className="posts-title"> { user.author_name } </div>
        </Link>
      );
    });

    return (
      <div id="posts-container">
        <div id="posts-header"> Users </div>
        <ul id="posts"> {allUsers} </ul>
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    users: state.users.all,
  }
);


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, actions)(Users));
