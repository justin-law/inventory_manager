import React from 'react'
import "./HomeContent.css"
import GrandTotal from './GrandTotal'

function HomeContent() {
    return (
        <div>
            <div className="home-top">
                <h3>Welcome to my inventory management webapp</h3>
            </div>
            {/* <div className="home-top">
                <h5>click on any of the tabs on the left for more info</h5>
            </div> */}
            <GrandTotal />
        </div>
    )
}

export default HomeContent
