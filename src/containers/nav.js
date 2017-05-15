import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import * as actions from '../actions';


const Nav = (props) => {
  const handleClick = () => {
    props.signoutUser(props.history);
  };

  const loggedIn = props.auth ?
    (<div>
      <button onClick={handleClick}>Sign Out</button>
    </div>) :
    (<div>
      <NavLink to="/signin">
        <button>Sign In</button>
      </NavLink>
      <NavLink to="/signup">
        <button>Sign Up</button>
      </NavLink>
    </div>);

  return (
    <nav>
      <NavLink className="links" exact to="/">Puppy Love</NavLink>
      <div>
        {loggedIn}
        <NavLink to="/users">
          <button>Users</button>
        </NavLink>
        <NavLink to="/posts/new">
          <button>New Post</button>
        </NavLink>
      </div>
    </nav>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    auth: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, actions)(Nav));
