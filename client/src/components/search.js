import axios from 'axios';
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./search.css"

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

const Item = (props) => (
    <tr>
      <td>{props.item.item_name}</td>
      <td>{props.item.item_date}</td>
      <td>{props.item.item_amount}</td>
      <td>{props.item.item_notes}</td>
      <td>
        <Link to={"/" + props.action + "/edit/" + props.item._id}>Edit</Link> |
        <a
          href="/search"
          onClick={() => {
            props.deleteItem(props.action, props.item._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
  
function Search() {
  const [inItems, setInItems] = useState({
      items: []
  });

  const [outItems, setOutItems] = useState({
      items: []
  });

  const [query, setQuery] = useState("");

  const [showIn, setShowIn] = useState(false);

  const [showOut, setShowOut] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  function getQueryData() {
    axios.get('https://mern-inventory-manager.herokuapp.com/inflow/search/' + query)
      .then((response) =>{
          setInItems({items: response.data});
          if (response.data.length === 0) {
            setShowIn(false);
          } else {
            setShowIn(true);
          }
      }).catch(function (error) {
          console.log(error);
      });

    axios.get('https://mern-inventory-manager.herokuapp.com/outflow/search/' + query)
      .then((response) =>{
          setOutItems({items: response.data});
          if (response.data.length === 0) {
            setShowOut(false);
          } else {
            setShowOut(true);
          }
      }).catch(function (error) {
          console.log(error);
      });

  };

  function onSubmit(e){
      e.preventDefault();
      if (query !== "") {
        getQueryData();
        setSubmitted(true);
      } else {
        console.log('must have query')
      }
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }


  function inItemList() {
    return inItems.items.map((currentitem) => {
        return (
        <Item
        action="inflow"
        key={currentitem._id}
        item={currentitem}
        deleteItem={deleteItem}
        />
        );
    });
  }

  function outItemList() {
    return outItems.items.map((currentitem) => {
        return (
        <Item
        action="outflow"
        key={currentitem._id}
        item={currentitem}
        deleteItem={deleteItem}
        />
        );
    });
  };

  // This method will delete a record based on the method
  function deleteItem(action, id) {
    axios.delete("https://mern-inventory-manager.herokuapp.com/" + action + "/" + id).then((response) => {
      console.log(response.data);
    });
  }

    return (
        <div>
          <div className="search-topcard">
            <h3>Search</h3>
            <p>Type in the item name and it will return all records with the exact item name</p>
          
            
            <form onSubmit={onSubmit}>
              <label htmlFor="fname" className="form-label">Enter Query:</label>
              <input type="text" value={query} onChange={handleChange} className="form-control" id="searchterm" name="searchterm" required></input>
              <div className="col-auto">
                <button type="submit" className="btn btn-light mb-3 searchbtn">Search</button>
              </div>
            </form>
          </div>

          {submitted && !showIn && (
            <div className='search-results'>
              <h3>No Inflow Records Found</h3>
            </div>
          )}

          {showIn && (
            <div className="search-results">
            <h3>Inflow Results</h3>
            <table className="table table-striped" >
              <thead>
                <tr>
                  <th className="itemCol">Item</th>
                  <th className="dateCol">Date Added</th>
                  <th className="amountCol">Amount</th>
                  <th className="notesCol">Notes</th>
                  <th className="actionCol">Action</th>
                </tr>
              </thead>
              <tbody>{inItemList()}</tbody>
            </table>
          </div>
          )}
          
          {submitted && !showOut && (
            <div className='search-results'>
              <h3>No Outflow Records Found</h3>
            </div>
          )}

          {showOut && (
            <div className="search-results">
              <h3>Outflow Results</h3>
              <table className="table table-striped" >
                <thead>
                  <tr>
                    <th className="itemCol">Item</th>
                    <th className="dateCol">Date Added</th>
                    <th className="amountCol">Amount</th>
                    <th className="notesCol">Notes</th>
                    <th className="actionCol">Action</th>
                  </tr>
                </thead>
                <tbody>{outItemList()}</tbody>
              </table>
            </div>
          )}
        </div>
    );
}

export default Search
