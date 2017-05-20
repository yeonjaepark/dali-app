import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';


class Member extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.fetchMember(this.props.match.params.id);
  }

  render() {
    return (
      <div id="profile">
        <img src={`http://mappy.dali.dartmouth.edu/${this.props.member.iconUrl}`} alt="" />
        <div id="profile-info">
          <div id="name"> {this.props.member.name} </div>
          <div id="email"> {this.props.member.message} </div>
          <a href={this.props.member.url}> Click me! </a>
        </div>
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    member: state.members.member,
  }
);

export default withRouter(connect(mapStateToProps, actions)(Member));
