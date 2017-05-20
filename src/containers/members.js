import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions';

class Members extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    let i = -1;
    const allMembers = this.props.members.map((member) => {
      i += 1;
      return (
        <Link className="links" to={`/members/${i}`} id="post" key={i}>
          <img src={`http://mappy.dali.dartmouth.edu/${member.iconUrl}`} alt="" />
          <div className="posts-title"> { member.name } </div>
        </Link>
      );
    });

    return (
      <div id="posts-container">
        <div id="posts-header"> Members </div>
        <ul id="posts"> {allMembers} </ul>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    members: state.members.all,
  }
);

// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, actions)(Members));
