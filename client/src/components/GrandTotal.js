import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./GrandTotal.css"

const Item = (props) => (
    <tr>
        <td>{props.item._id}</td>
        <td>{props.item.total}</td>
    </tr>
);

function GrandTotal() {
    // const [Initems, setInItems] = useState({
    //     items: []
    // });

    // const [Outitems, setOutItems] = useState({
    //     items: []
    // });

    const [grandTotal, setGT] = useState({
        items: []
    });

    useEffect(() => {
        // axios.get("http://localhost:3000/inflow/sum/")
        // .then((response) =>{
        //     setInItems({items: response.data});
        // }).catch(function (error) {
        //     console.log(error);
        // });

        // axios.get("http://localhost:3000/outflow/sum/")
        // .then((response) =>{
        //     setOutItems({items: response.data});
        // }).catch(function (error) {
        //     console.log(error);
        // });

        axios.get("http://localhost:3000/outflow/sum/")
        .then((response) =>{
            setGT({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });

    }, []);

      // This method will map out the users on the table
      function itemList() {
        return grandTotal.items.map((currentitem) => {
            return (
            <Item
            key={currentitem._id}
            item={currentitem}
            />
            );
        });
    }


    return (
        <div className="total-wrapper">
            <h3>Item totals</h3>
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
    )
}

export default GrandTotal
