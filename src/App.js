import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Pages/Home';
import Upload from './components/Pages/Upload';
import Subscriptions from './components/Pages/Subscriptions';
import Error from './components/Pages/Error';
import Navigation from './components/PartsOfPage/Navigation';
import SubSidebar from "./components/PartsOfPage/SubSidebar";
import Explore from './components/Pages/Explore';
import History from './components/Pages/History';
import Support from "./components/Pages/Support";
import VideosByCategory from "./components/Pages/VideosByCategory";
import PlayVideo from "./components/Pages/PlayVideo";

// npm start in terminal to run

class App extends Component {


  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />

            <div id="zip-tube-banner">
              <hr />
              <h1 id="zip-tube-title"><a id="zip-tube-title-link" href="http://localhost:3000/">ZipTube</a></h1>
              <hr />
            </div>

            <div className="page-element">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/explore" component={Explore}/>
                <Route path="/upload"><Upload /></Route>
                <Route path="/subscriptions" component={Subscriptions}/>
                <Route path="/history" component={History}/>
                <Route path="/support" component={Support}/>
                <Route path="/videos" component={VideosByCategory}/>
                <Route path="/play" component={PlayVideo}/>
                <Route component={Error}/>
              </Switch>
            </div>

            <div>
              <SubSidebar className="side-bar"/>
            </div>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
