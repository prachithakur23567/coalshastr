import React from 'react'
import { NavLink } from 'react-router-dom'
// import Form from './Form'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="nav">
                    <li> <NavLink to="/" style={{ listStyle: "none", textDecoration: "none", color: "whitesmoke", fontSize: "larger", fontWeight: "800" }} > Home </NavLink> </li>
                    <li> <NavLink to="/about" style={{ listStyle: "none", textDecoration: "none", color: "whitesmoke", fontSize: "larger", fontWeight: "800" }} > About </NavLink></li>
                    <li> <NavLink to="/contact" style={{ listStyle: "none", textDecoration: "none", color: "whitesmoke", fontSize: "larger", fontWeight: "800" }}> Contact</NavLink></li>
                </ul>
            </div>
        </>

    )
}

export default Navbar
