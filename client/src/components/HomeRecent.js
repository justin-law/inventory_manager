import axios from 'axios';
import React, {useState, useEffect} from 'react'
import "./HomeRecent.css"

const Item = (props) => (
    <tr>
      <td>{props.item.item_name}</td>
      <td>{props.item.item_date}</td>
      <td>{props.item.item_amount}</td>
      <td>{props.item.item_notes}</td>
    </tr>
  );

function HomeRecent() {
    const [inItems, setInItems] = useState({
        items: []
    });

    useEffect(() => {
        axios.get("http://localhost:3000/inflow/home/")
        .then((response) =>{
            setInItems({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const [outItems, setOutItems] = useState({
        items: []
    });

    useEffect(() => {
        axios.get("http://localhost:3000/outflow/home/")
        .then((response) =>{
            setOutItems({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    // This method will map out the users on the table
    function itemList(collection) {
        return collection.items.map((currentitem) => {
            return (
            <Item
            key={currentitem._id}
            item={currentitem}
            />
            );
        });
    }

    return (
        <div className='container-recent'>
    
        <div className="app recentLeft">
            <h3>Recent Inflow Items</h3>
            <table className="table table-striped" >
            <thead>
                <tr>
                <th className="itemCol-recent">Item</th>
                <th className="dateCol-recent">Date Added</th>
                <th className="amountCol-recent">Amount</th>
                <th className="notesCol-recent">Notes</th>
                </tr>
            </thead>
            <tbody>{itemList(inItems)}</tbody>
            </table>
        </div>

        <div className="app recentRight">
            <h3>Recent Outflow Items</h3>
            <table className="table table-striped" >
            <thead>
                <tr>
                <th className="itemCol-recent">Item</th>
                <th className="dateCol-recent">Date Added</th>
                <th className="amountCol-recent">Amount</th>
                <th className="notesCol-recent">Notes</th>
                </tr>
            </thead>
            <tbody>{itemList(outItems)}</tbody>
            </table>
        </div>
      
      </div>
    )
}

export default HomeRecent
