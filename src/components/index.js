import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Member from '../containers/member';
import Members from '../containers/members';
import Nav from '../containers/nav';
import '../style.scss';

const About = (props) => {
  return (
    <img src="https://static1.squarespace.com/static/551cbdc5e4b0cd11d2597487/t/563e8959e4b0dc853ed2db49/1446938972012/" alt="" />
  );
};

const App = (props) => {
  return (
    <Router>
      <div id="main-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Members} />
          <Route path="/members/:id" component={Member} />
          <Route path="/about" component={About} />
          <Route render={() => (<div> post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
