import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Upload from './components/Upload';
import Subscriptions from './components/Subscriptions';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Explore from './components/Explore';
import History from './components/History';
import Support from "./components/Support";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/explore" component={Explore}/>
              <Route path="/upload" component={Upload}/>
              <Route path="/subscriptions" component={Subscriptions}/>
              <Route path="/history" component={History}/>
              <Route path="/support" component={Support}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
