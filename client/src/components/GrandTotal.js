import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./GrandTotal.css"

//prototype of one item row within the table
const Item = (props) => (
    <tr>
        <td>{props.item._id}</td>
        <td>{props.item.total}</td>
    </tr>
);

//use a promise to make the calculation of item totals synchronous
function makeGetRequest(path) {
    return new Promise(function (resolve, reject) {
        axios.get(path).then(
            (response) => {
                var result = response.data;
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    });
}

function GrandTotal() {
    const [grandTotal, setGT] = useState({
        items: []
    });

    useEffect(() => {
        async function fetchData() {
            //makes sure the item sums are fetched before calculations are made so that the forEach function later doesn't crash
            let inItems = await makeGetRequest('http://localhost:3000/inflow/sum/');
            let outItems = await makeGetRequest("http://localhost:3000/outflow/sum/");

            //use a hashmap to calculate the inflow - outflow total item amounts
            const tempGT = new Map();
            inItems.forEach(element => {
                tempGT.set(element._id, element.total);
            });
            outItems.forEach(element => {
                if (tempGT.has(element._id)){
                    tempGT.set(element._id, tempGT.get(element._id)-(element.total));
                } else {
                    tempGT.set(element._id, -(element.total));
                }
            });

            //turn the map back into an array so it can be rendered on to webpage
            const tempArray = [];
            for (const [key, value] of tempGT.entries()) {
                
                const item = {
                    _id: key,
                    total: value
                }
                tempArray.push(item);
            }
    
            setGT({items: tempArray});
        }

        fetchData();
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
