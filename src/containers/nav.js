import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import * as actions from '../actions';


const Nav = (props) => {
  return (
    <nav>
      <NavLink className="links" exact to="/">Dali</NavLink>
      <div>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default withRouter(connect(null, actions)(Nav));
