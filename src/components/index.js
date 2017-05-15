import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from '../containers/post';
import Posts from '../containers/posts';
import NewPost from '../containers/new-post';
import SignIn from '../containers/signin';
import SignUp from '../containers/signup';
import Nav from '../containers/nav';
import requireAuth from '../containers/requireAuth';
import '../style.scss';

const App = (props) => {
  return (
    <Router>
      <div id="main-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/posts/new" component={requireAuth(NewPost)} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div> post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
