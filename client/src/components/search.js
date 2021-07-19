import axios from 'axios';
import React, {useState, useEffect} from 'react'
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
        <Link to={"/edit/" + props.item._id}>Edit</Link> |
        <a
          href="/search"
          onClick={() => {
            props.deleteItem(props.item._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
  
function Search() {
    const [items, setItems] = useState({
        items: []
    });

    const [query, setQuery] = useState("");

    // useEffect(() => {
    //     axios.get("http://localhost:3000/search/" + query)
    //     .then((response) =>{
    //         setItems({items: response.data});
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    // }, []);

    function getQueryData() {
      axios.get('http://localhost:3000/inflow/sum/')
        .then((response) =>{
            setItems({items: response.data});
            console.log(response.data);
            console.log(items);
        }).catch(function (error) {
            console.log(error);
        });

    };

    function onSubmit(e){
        e.preventDefault();
        alert(query);
        getQueryData();
    }

    function handleChange(e) {
      setQuery(e.target.value);
    }


    function itemList() {
      return items.items.map((currentitem) => {
          return (
          <Item
          key={currentitem._id}
          item={currentitem}
          />
          );
      });
  }

    return (
        <div>
          <div className="search-topcard">
            <h3>Search</h3>
            <p>Type in the item name and it will return all records with the exact item name</p>
          
            
            <form onSubmit={onSubmit}>
              <label htmlFor="fname" className="form-label">Enter Query:</label>
              <input type="text" value={query} onChange={handleChange} className="form-control" id="searchterm" name="searchterm"></input>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Search</button>
              </div>
            </form>

          </div>

          <div className="search-results">
            <h3>Results</h3>
            <table className="table table-striped" >
              <thead>
                <tr>
                  <th className="itemCol">Item</th>
                  <th className="numCol">Total amount</th>
                </tr>
              </thead>
              <tbody>{itemList()}</tbody>
            </table>
          </div>
        </div>
    );
}

export default Search
