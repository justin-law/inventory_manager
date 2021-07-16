import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './itemSum.css';

const Item = (props) => (
    <tr>
        <td>{props.item._id}</td>
        <td>{props.item.total}</td>
    </tr>
);

function OutSum() {
    const [items, setItems] = useState({
        items: []
    });

    useEffect(() => {
        axios.get("http://localhost:3000/outflow/sum/")
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
            item={currentitem}
            />
            );
        });
    }

    return (
        <div className='all'>
        <h3>Outflow Item Summary</h3>
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

export default OutSum
