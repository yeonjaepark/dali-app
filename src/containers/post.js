import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
import * as actions from '../actions';


class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTitle: false,
      editContent: false,
      editTags: false,
      editURL: false,
      title: '',
      content: '',
      tags: '',
      cover_url: '',
    };

    this.editTitle = this.editTitle.bind(this);
    this.editContent = this.editContent.bind(this);
    this.editTags = this.editTags.bind(this);
    this.editURL = this.editURL.bind(this);

    this.onBlurHandle = this.onBlurHandle.bind(this);

    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleURL = this.handleURL.bind(this);

    this.deleteHandle = this.deleteHandle.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.post.title,
      content: nextProps.post.content,
      tags: nextProps.post.tags,
      cover_url: nextProps.post.cover_url,
    });
  }


  // to update
  onBlurHandle() {
    this.setState({ editTitle: false, editContent: false, editTags: false, editURL: false });
    const post = {
      id: this.props.post.id,
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
      cover_url: this.state.cover_url,
    };
    this.props.updatePost(post);
  }


  // edit handles
  editTitle() {
    this.setState({ editTitle: true });
  }

  editContent() {
    this.setState({ editContent: true });
  }

  editTags() {
    this.setState({ editTags: true });
  }

  editURL() {
    this.setState({ editURL: true });
  }


  // edit handlers
  handleTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleContent(event) {
    this.setState({ content: event.target.value });
  }

  handleTags(event) {
    this.setState({ tags: event.target.value });
  }

  handleURL(event) {
    this.setState({ cover_url: event.target.value });
  }


  // delete handler
  deleteHandle(event) {
    this.props.deletePost(this.props.post.id, this.props.history);
  }

  render() {
    const title = this.state.editTitle ?
      <div><Textarea className="textarea" value={this.state.title} onChange={this.handleTitle} onBlur={this.onBlurHandle}> { this.props.post.title } </Textarea></div>
      : <div id="title" onClick={this.editTitle}> { this.props.post.title } </div>;

    const content = this.state.editContent ?
      <div><Textarea className="textarea" value={this.state.content} onChange={this.handleContent} onBlur={this.onBlurHandle}> { this.props.post.content } </Textarea></div>
      : <div id="content" onClick={this.editContent} dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />;

    const tags = this.state.editTags ?
      <div><Textarea className="textarea" value={this.state.tags} onChange={this.handleTags} onBlur={this.onBlurHandle}> { this.props.post.tags } </Textarea></div>
      : <div id="tags" onClick={this.editTags}> { this.props.post.tags } </div>;

    const url = this.state.editURL ?
      <div><Textarea className="textarea" value={this.state.cover_url} onChange={this.handleURL} onBlur={this.onBlurHandle}> { this.props.post.cover_url } </Textarea></div>
      : <img src={this.props.post.cover_url} alt="" onClick={this.editURL} />;

    return (
      <div id="view-post">
        {url}
        <div id="text">
          {title}
          {content}
          {tags}
          <button onClick={this.deleteHandle}>Delete</button>
        </div>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);


export default withRouter(connect(mapStateToProps, actions)(Post));
