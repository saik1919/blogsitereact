import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Blogpost from './components/Blogpost';
import OlderPosts from './components/OldPosts';
import ThisMonth from './components/ThisMonth';
import SinglePost from './components/SinglePost';
import AddPost from './components/AddPost';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter  >
          <Switch>
            <Route exact path="/" component={Blogpost}/>
            <Route path="/old" component={OlderPosts}/>
            <Route path="/thismonth" component={ThisMonth}/>
            <Route path="/post/:id" component={SinglePost}/>
            <Route path="/addPost" component={AddPost}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
