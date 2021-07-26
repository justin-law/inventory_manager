import React from 'react'
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import "./LeftNav.css"

function LeftNav(props) {
    //props.selected

    //need to pass in param for which one it is, then compare with prop.selected
    const navStyle = function(cur) {
        return ({
            display:'block',
            textDecoration: 'none',
            color: 'black',
            'listStyleType': 'none',
            'textAlign': "center",
            'fontSize': '20px',
            'fontFamily': 'Verdana, Geneva, Tahoma, sans-serif',
            'padding': '4% 2%',
            'width': '100%',
            'backgroundColor': 'rgb(229, 229, 229)',
            'marginBottom': '15px',
            'paddingLeft': '0',
            'borderRadius': '5px'
        })
    };
    

    const activeColor = { color: 'black', backgroundColor: 'rgb(245, 188, 0)'};

    return (
        <div className="left-rect">
            <h3 className="navTitle">Quick Links</h3>
            <hr></hr>
            <div className='left-inner'>
                
                    <NavLink style={navStyle("1")} activeStyle={activeColor} className='navItem' exact to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink style={navStyle("2")} activeStyle={activeColor} className='navItem' to="/inflow">
                        <li>Inflow</li>
                    </NavLink>
                    <NavLink style={navStyle("3")} activeStyle={activeColor} className='navItem' to="/outflow">
                        <li>Outflow</li>
                    </NavLink>
                    <NavLink style={navStyle("4")} activeStyle={activeColor} className='navItem' to="/search">
                        <li>Search</li>
                    </NavLink>
                
            </div>
        </div>
    )
}

export default LeftNav
