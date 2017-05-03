import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      tags: '',
      coverURL: '',
    };

    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.titleHandle = this.titleHandle.bind(this);
    this.contentHandle = this.contentHandle.bind(this);
    this.tagHandle = this.tagHandle.bind(this);
    this.coverURLHandle = this.coverURLHandle.bind(this);
  }

  onSubmitHandle(event) {
    event.preventDefault();
    if (this.state.title !== '' && this.state.tags !== '' && this.state.content !== '' && this.state.coverURL !== '') {
      const post = {
        title: this.state.title,
        tags: this.state.tags,
        content: this.state.content,
        cover_url: this.state.coverURL,
      };

      this.props.createPost(post, this.props.history);
      this.setState({ title: '', content: '', tags: '', coverURL: '' });
    }
  }

  titleHandle(event) {
    this.setState({ title: event.target.value });
  }

  contentHandle(event) {
    this.setState({ content: event.target.value });
  }

  tagHandle(event) {
    this.setState({ tags: event.target.value });
  }

  coverURLHandle(event) {
    this.setState({ coverURL: event.target.value });
  }

  render() {
    return (
      <div id="create-post">
        <div> Create a new post! </div>
        <form onSubmit={this.onSubmitHandle} >
          <input onChange={this.titleHandle} value={this.state.title} type="text" placeholder="Title" />
          <input onChange={this.contentHandle} value={this.state.content} type="text" placeholder="Content" />
          <input onChange={this.tagHandle} value={this.state.tags} type="text" placeholder="Tags" />
          <input onChange={this.coverURLHandle} value={this.state.coverURL} type="text" placeholder="Cover URL" />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(NewPost));
