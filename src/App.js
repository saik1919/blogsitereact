import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Blogpost from './components/Blogpost';
import OlderPosts from './components/OldPosts';
import ThisMonth from './components/ThisMonth';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Blogpost}/>
            <Route path="/old" component={OlderPosts}/>
            <Route path="/thismonth" component={ThisMonth}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
