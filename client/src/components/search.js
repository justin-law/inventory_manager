import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

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
            <h3>Search</h3>
            <p>Type in the item name and it will return all records with the exact item name</p>
            <form >

            </form>
        </div>
    )
}

export default Search
