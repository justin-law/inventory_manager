import "./itemList.css"
import React, { Component } from "react";

import axios from 'axios';
import { Link } from "react-router-dom";

const Item = (props) => (
  <tr>
    <td>{props.item.item_name}</td>
    <td>{props.item.item_date}</td>
    <td>{props.item.item_amount}</td>
    <td>{props.item.item_notes}</td>
    <td>
      <Link to={"/outflow/edit/" + props.item._id}>Edit</Link> |
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

export default class OutList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = { items: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/outflow/record/")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteItem(id) {
    axios.delete("http://localhost:3000/outflow/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      item: this.state.items.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  itemList() {
    return this.state.items.map((currentitem) => {
      return (
        <Item
          item={currentitem}
          deleteItem={this.deleteItem}
          key={currentitem._id}
        />
      );
    });
  }

  // This following section will display the table with the items of individuals.
  render() {
    return (
      <div>
        
      
      <div className="app">
      <h3>Full Outflow Item Record</h3>
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
          <tbody>{this.itemList()}</tbody>
        </table>
      </div>
      
      </div>
    );
  }
}





