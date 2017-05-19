import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.auth) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!this.nextProps.auth) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  // connects particular parts of redux state to this components props
  const mapStateToProps = state => (
    {
      auth: state.auth.authenticated,
    }
  );

  // react-redux glue -- outputs Container that know state in props
  // new way to connect with react router 4
  return connect(mapStateToProps, null)(RequireAuth);
}
