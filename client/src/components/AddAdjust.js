import React, {useState} from 'react'
import { withRouter } from "react-router";
import axios from 'axios';

function AddAdjust(props) {
    const [item_amount, setAmount] = useState(props.match.params.total);
    const [item_notes, setNotes] = useState('Item total adjustment');

    function adjustSubmit(e) {
        e.preventDefault();
        let newRecord = {
            item_name: props.match.params.id,
            item_date: (new Date()).toISOString().split('T')[0],
            item_amount: item_amount,
            item_notes: item_notes,
        }
        let difference = item_amount - props.match.params.total;

        if (difference > 0) {
            newRecord.item_amount = difference;
            //post difference to inflow database
            axios
            .post("http://localhost:3000/inflow/record/add", newRecord)
            .then((res) => console.log(res.data));
        } else if (difference < 0) {
            //post difference to outflow
            newRecord.item_amount = -difference;
            axios
            .post("http://localhost:3000/outflow/record/add", newRecord)
            .then((res) => console.log(res.data));
        }
        //return to homepage
        this.props.history.push("/");
    }

    function onChangeItemAmount(e) {
        setAmount(e.target.value);
    }

    function onChangeItemNotes(e) {
        setNotes(e.target.value)
    }

    function showChange() {
        return
        //(item_amount - props.match.params.total).toString
    }

    return (
        <div className="edit-content">
        <div className="edit-card">
          <h3>Adjust {props.match.params.id} Total Amount</h3>
          <h5>Current total amount: {props.match.params.total}</h5>
          <h5>Current change: {showChange}</h5>
          <form onSubmit={adjustSubmit}>
            
            <div className="form-group">
              <label>Item amount: </label>
              <input
                type="number"
                className="form-control"
                value={item_amount}
                onChange={onChangeItemAmount}
                required
              />
            </div>
            <div className="form-group">
              <label>Item notes: </label>
              <input
                type="text"
                className="form-control"
                value={item_notes}
                onChange={onChangeItemNotes}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update record"
                className="btn btn-light"
              />
            </div>
          </form>
        </div>
      </div>
    )
}

export default withRouter(AddAdjust);
