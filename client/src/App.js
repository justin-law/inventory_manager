import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Router } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import Inflow from "./components/Inflow"
import Search from "./components/search";
import LeftNav from "./components/LeftNav";

import "./App.css"

const App = () => {
  return (
    
    <div className="main">
        <div>
          <Navbar />
        </div>

        <Route exact path="/">
          <div className="content">
            <div className="left-nav">
              <LeftNav /> 
            </div>
            <div className="center">
              <Inflow />
            </div>
          </div>
        </Route>
        
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create">
          <div className="grid-create">
            <Create />
          </div>
        </Route>
        <Route path="/inflow">
          <div className='content'>
            <div className="left-nav">
              <LeftNav />
            </div>
          </div>
        </Route>
        <Route path="/outflow">
          <div className='content'>
            <div className="left-nav">
              <LeftNav />
            </div>
          </div>
        </Route>
        <Route path="/search">
          <div className='content'>
            <div className="left-nav">
              <LeftNav />
            </div>
            <div className="center">
              <Search />
            </div>
          </div>
        </Route>
    </div>
  );
};

export default App;