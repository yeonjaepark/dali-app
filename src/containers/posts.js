import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  clickHandle(event) {
    this.props.fetchPost();
  }

  render() {
    const allPosts = this.props.posts.map((post) => {
      return (
        <Link className="links" to={`/posts/${post.id}`} id="post" key={post.id}>
          <img src={post.cover_url} alt="" />
          <div className="posts-title"> { post.title } </div>
          <div className="posts-tag"> { post.tags } </div>
        </Link>
      );
    });

    return (
      <div id="posts-container">
        <div id="posts-header"> Posts </div>
        <ul id="posts"> {allPosts} </ul>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    posts: state.posts.all,
  }
);


// react-redux glue -- outputs Container that know state in props
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, actions)(Posts));
