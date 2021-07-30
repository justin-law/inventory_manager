import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './itemSum.css';

const Item = (props) => (
    <tr>
        <td>{props.item._id}</td>
        <td>{props.item.total}</td>
    </tr>
);

function ItemSum() {
    const [items, setItems] = useState({
        items: []
    });

    useEffect(() => {
        axios.get("https://mern-inventory-manager.herokuapp.com/inflow/sum/")
        .then((response) =>{
            setItems({items: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

      // This method will map out the users on the table
    function itemList() {
        return items.items.map((currentitem) => {
            return (
            <Item
            key={currentitem._id}
            item={currentitem}
            />
            );
        });
    }

    return (
        <div className='all'>
        <h3>Inflow Item Summary</h3>
        <table className="table table-striped" >
          <thead>
            <tr>
              <th className="itemCol-sum">Item</th>
              <th className="numCol">Total amount</th>
            </tr>
          </thead>
          <tbody>{itemList()}</tbody>
        </table>
      </div>
    )
}

export default ItemSum
