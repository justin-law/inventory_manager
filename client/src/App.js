import React, { useEffect } from 'react'

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";
//might need to import Router, might not

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import Inflow from "./components/Inflow"
import Search from "./components/search";
import LeftNav from "./components/LeftNav";
import Outflow from "./components/Outflow";
import OutCreate from "./components/OutCreate";
import OutEdit from "./components/OutEdit";
import HomeContent from "./components/HomeContent";
import Contact from './components/Contact';
import About from './components/About'
import AddAdjust from './components/AddAdjust';

import "./App.css"

const App = () => {
  useEffect(() => {
    document.title = "Inventory Tracker"
  }, [])

  return (
    <div className="main">
        <div>
          <Navbar />
        </div>

        <Route exact path="/">
          <div className="content">
            <div className="left-nav">
              <LeftNav selected='1' /> 
            </div>
            <div className="center">
              <HomeContent />
            </div>
          </div>
        </Route>
        
        <Route path="/change/:id/:total">
          <div className="grid-create">
            <AddAdjust />
          </div>
        </Route>

        <Route path="/inflow/edit/:id" component={Edit} />
        <Route path="/outflow/edit/:id" component={OutEdit} />

        <Route path="/inflow/create">
          <div className="grid-create">
            <Create />
          </div>
        </Route>
        <Route path="/outflow/create">
          <div className="grid-create">
            <OutCreate />
          </div>
        </Route>

        <Route exact path="/inflow">
          <div className='content'>
            <div className="left-nav">
              <LeftNav  selected='2'/>
            </div>
            <div className="center">
              <Inflow />
            </div>
          </div>
        </Route>
        <Route exact path="/outflow">
          <div className='content'>
            <div className="left-nav">
              <LeftNav selected='3' />
            </div>
            <div className="center">
              <Outflow />
            </div>
          </div>
        </Route>

        <Route path="/search">
          <div className='content'>
            <div className="left-nav">
              <LeftNav selected='4'/>
            </div>
            <div className="center">
              <Search />
            </div>
          </div>
        </Route>
        
        <Route path ="/about">
          <div className='about-wrapper'>
            <About />
          </div>
        </Route>
        <Route path="/contact">
          <div className='contact-wrapper'>
            <Contact />
          </div>
        </Route>
    </div>
  );
};

export default App;