import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Post from '../containers/post';
import Posts from '../containers/posts';
import NewPost from '../containers/new-post';
import '../style.scss';


const Nav = (props) => {
  return (
    <nav>
      <NavLink className="links" exact to="/">Puppy Love</NavLink>
      <NavLink to="/posts/new">
        <button>New Post</button>
      </NavLink>
    </nav>
  );
};


const App = (props) => {
  return (
    <Router>
      <div id="main-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div> post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
