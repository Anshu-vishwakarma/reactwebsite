import React, { Component } from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
export class Menu extends Component {
    

    render() {
        return (
            <div className="Aa">
            <NavLink  exact activeClassName="A" style={{marginRight:"50px"}} to="/">Home</NavLink>
            <NavLink  exact activeClassName="A"  style={{marginRight:"50px"}} to="/2">About</NavLink>
            <NavLink exact  activeClassName="A"  style={{marginRight:"50px"}} to="/1">Contact</NavLink>
         
            </div>
        )
    }
}

export default Menu
