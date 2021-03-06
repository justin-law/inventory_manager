import React from 'react'
import "./HomeContent.css"
import GrandTotal from './GrandTotal'
import HomeRecent from './HomeRecent'

function HomeContent() {
    return (
        <div>
            <div className="home-top">
                <h3>Dashboard</h3>
            </div>
            {/* <div className="home-top">
                <h5>click on any of the tabs on the left for more info</h5>
            </div> */}
            <GrandTotal />
            <HomeRecent />
        </div>
    )
}

export default HomeContent
