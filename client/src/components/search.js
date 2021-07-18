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
          href="/"
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

    useEffect(() => {
        axios.get("http://localhost:3000/search/" + query)
        .then((response) =>{
            setItems({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    
    function onSubmit(e){
        e.preventDefault();
        
    }

    return (
        <div>
          <div className="search-topcard">
            <h3>Search</h3>
            <p>Type in the item name and it will return all records with the exact item name</p>
          
            
            <form >
              <label for="fname" class="form-label">Enter Query:</label>
              <input type="text" class="form-control" id="searchterm" name="searchterm"></input>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Search</button>
              </div>
            </form>

          </div>

          <div className="search-results">
            <h3>Results</h3>
          </div>
        </div>
    );
}

export default Search
