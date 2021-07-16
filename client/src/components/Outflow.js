import React from 'react'
import OutList from "./OutList"
import OutSum from "./OutSum"

function Outflow() {
    return (
        <div>
            <OutSum />
            <OutList />
            
            {/* <NavLink className="btn btn-primary" role="button" aria-pressed="false" to="/outflow">
                Back
            </NavLink> */}
        </div>
        
    )
}

export default Outflow
