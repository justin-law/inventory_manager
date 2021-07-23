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
    const [inItems, setInItems] = useState({
        items: []
    });

    const [outItems, setOutItems] = useState({
        items: []
    });

    const [grandTotal, setGT] = useState({
        items: []
    });

    useEffect(() => {
        axios.get("http://localhost:3000/inflow/sum/")
        .then((response) =>{
            //console.log(inItems)
            setInItems({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });

        axios.get("http://localhost:3000/outflow/sum/")
        .then((response) =>{
            setOutItems({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });


        const tempGT = new Map();
        inItems.items.forEach(element => {
            tempGT.set(element._id, element.total);
        });
        outItems.items.forEach(element => {
            if (tempGT.has(element._id)){
                tempGT.set(element._id, tempGT.get(element._id)-(element.total));
            } else {
                tempGT.set(element._id, -(element.total));
            }
        });

        const tempArray = [];
        for (const [key, value] of tempGT.entries()) {
            
            const item = {
                _id: key,
                total: value
            }
            tempArray.push(item);
        }

        setGT({items: tempArray});

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
        <div className="total-wrapper">
            <h3>Item totals</h3>
            <table className="table table-striped" >
                <thead>
                    <tr>
                    <th className="itemCol-sum">Item</th>
                    <th className="numCol">Total amount</th>
                    </tr>
                </thead>
                <tbody>{itemList(grandTotal)}</tbody>
            </table>
        </div>
    )
}

export default GrandTotal
