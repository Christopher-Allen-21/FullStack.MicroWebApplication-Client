import React from 'react';
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
import Login from "./components/Authentication/LoginButton";
import Profile from "./components/Pages/Profile"
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Authentication/Loading";
import ProtectedRoute from "./auth/ProtectedRoute";

// npm start in terminal to run

const App = () => {

  const {isLoading} = useAuth0();
  if (isLoading) {
    return <Loading /> ;
  }

    return (
        <>
        <BrowserRouter>
          <div>
            <Navigation />

            <div id="zip-tube-banner">
              <hr />
              <h1 id="zip-tube-title"><a id="zip-tube-title-link" href="/"><img id="zip-tube-logo" src="https://i.imgur.com/BqT2G0X.png" />ZipTube</a></h1>
              <hr />
            </div>

            <div className="page-element">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/explore" component={Explore}/>
                <ProtectedRoute path="/upload" exact component={Upload} />
                <ProtectedRoute path="/subscriptions" exact component={Subscriptions}/>
                <ProtectedRoute path="/history" component={History}/>
                <ProtectedRoute path="/support" component={Support}/>
                <ProtectedRoute path="/video" component={VideosByCategory}/>
                <ProtectedRoute path="/play" component={PlayVideo}/>
                <ProtectedRoute path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route component={Error}/>
              </Switch>
            </div>

            <div>
              <SubSidebar className="side-bar"/>
            </div>

          </div>
        </BrowserRouter>
        </>
    );
}

export default App;
