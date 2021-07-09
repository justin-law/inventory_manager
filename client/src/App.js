import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import ItemList from "./components/itemList";
import ItemSum from "./components/ItemSum";

const App = () => {
  return (
    
    <div>
      <Navbar />
      <div>
        <Route exact path="/">
          <div className="content">
            <div className="sum">
              <ItemSum />
            </div>
            <div className="itemlist">
              <ItemList />
            </div>
          </div>
          
        </Route>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create">
          <Create />
        </Route>
      </div>
      
    </div>
  );
};

export default App;