import React from 'react'
import { Link } from "react-router-dom";
import "./LeftNav.css"

function LeftNav(props) {
    //props.selected

    //need to pass in param for which one it is, then compare with prop.selected
    const navStyle = function(cur) {
        return ({
            display:'block',
            textDecoration: 'none',
            color: 'black',
            'list-style-type': 'none',
            'text-align': "center",
            'font-size': '20px',
            'font-family': 'Verdana, Geneva, Tahoma, sans-serif',
            'padding': '4% 2%',
            'width': '100%',
            'background-color': bgcolor(props.selected, cur),
            'margin-bottom': '15px',
            'padding-left': '0'
        })
    };
    
    function bgcolor(selected, cur) {
        if (selected == cur) {
            return 'rgb(0, 216, 47)';
        } else {
            return 'rgb(214, 214, 214)';
        }
    }

    return (
        <div className="left-rect">
            <h3 className="navTitle">Quick Links</h3>
            <hr></hr>
            <div className='left-inner'>
                
                    <Link style={navStyle(1)} className='navItem' to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle(2)} className='navItem' to="/inflow">
                        <li>Inflow</li>
                    </Link>
                    <Link style={navStyle(3)} className='navItem' to="/outflow">
                        <li>Outflow</li>
                    </Link>
                    <Link style={navStyle(4)} className='navItem' to="/search">
                        <li>Search</li>
                    </Link>
                
            </div>
        </div>
    )
}

export default LeftNav
