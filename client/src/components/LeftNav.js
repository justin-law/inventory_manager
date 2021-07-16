import React from 'react'
import { Link } from "react-router-dom";
import "./LeftNav.css"

function LeftNav() {
    const navStyle = {
        display:'block',
        textDecoration: 'none',
        color: 'black',
        'list-style-type': 'none',
        'text-align': "center",
        'font-size': '20px',
        'font-family': 'Verdana, Geneva, Tahoma, sans-serif',
        'padding': '4% 2%',
        'width': '100%',
        'background-color': 'rgb(214, 214, 214)',
        'margin-bottom': '15px',
        'padding-left': '0'
    };

    return (
        <div className="left-rect">
            <h3 className="navTitle">Quick Links</h3>
            <hr></hr>
            <div className='left-inner'>
                
                    <Link style={navStyle} className='navItem' to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} className='navItem' to="/inflow">
                        <li>Inflow</li>
                    </Link>
                    <Link style={navStyle} className='navItem' to="/outflow">
                        <li>Outflow</li>
                    </Link>
                    <Link style={navStyle} className='navItem' to="/search">
                        <li>Search</li>
                    </Link>
                
            </div>
        </div>
    )
}

export default LeftNav
