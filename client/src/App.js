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
      <div className="content">
        <Route exact path="/">
          <ItemSum />
          <ItemList />
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