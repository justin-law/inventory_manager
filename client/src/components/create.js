import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import "./create.css"

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemDate = this.onChangeItemDate.bind(this);
    this.onChangeItemAmount = this.onChangeItemAmount.bind(this);
    this.onChangeItemNotes = this.onChangeItemNotes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      item_name: "",
      item_date: "",
      item_amount: "",
      item_notes: "",
    };
  }

  // These methods will update the state properties.
  onChangeItemName(e) {
    this.setState({
      item_name: e.target.value,
    });
  }

  onChangeItemDate(e) {
    this.setState({
      item_date: e.target.value,
    });
  }

  onChangeItemAmount(e) {
    this.setState({
      item_amount: e.target.value,
    });
  }

  onChangeItemNotes(e) {
    this.setState({
      item_notes: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newitem = {
      item_name: this.state.item_name,
      item_date: this.state.item_date,
      item_amount: this.state.item_amount,
      item_notes: this.state.item_notes,
    };

    axios
      .post("http://localhost:3000/inflow/record/add", newitem)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      item_name: "",
      item_date: "",
      item_amount: "",
      item_notes: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div className="create-content">
        <div className="create-card">
        <h3>Create Inflow Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_name}
              onChange={this.onChangeItemName}
              required
            />
          </div>
          <div className="form-group">
            <label>Date item added: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.item_date}
              onChange={this.onChangeItemDate}
              required
            />
          </div>
          <div className="form-group">
            <label>Item amount: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.item_amount}
              onChange={this.onChangeItemAmount}
              required
            />
          </div>
          <div className="form-group">
            <label>Other notes: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.item_notes}
              onChange={this.onChangeItemNotes}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create record"
              className= "btn btn-light"
            />
          </div>
        </form>
        <NavLink className="create-backbtn btn btn-light" role="button" aria-pressed="false" exact to="/inflow">
          Back
        </NavLink>
      </div>
      </div>
      
    );
  }
}