import React from 'react'
import ItemList from "./itemList";
import ItemSum from "./ItemSum";

function Inflow() {
    return (
        <div>
            <div className="sum">
              <ItemSum />
            </div>
            <div className="itemlist">
              <ItemList />
            </div>
        </div>
    )
}

export default Inflow
