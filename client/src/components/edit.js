import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";

class Edit extends Component {
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
      items: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          item_name: response.data.item_name,
          item_date: response.data.item_date,
          item_amount: response.data.item_amount,
          item_notes: response.data.item_notes,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    const newEditedItem = {
      item_name: this.state.item_name,
      item_date: this.state.item_date,
      item_amount: this.state.item_amount,
      item_notes: this.state.item_notes,
    };
    console.log(newEditedItem);

    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:3000/update/" + this.props.match.params.id,
        newEditedItem
      )
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      item_name: "",
      item_date: "",
      item_amount: "",
      item_notes: "",
    });

    this.props.history.push("/");
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Item</h3>
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
            <label>Item notes: </label>
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
              value="Update record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(Edit);