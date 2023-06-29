// import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (

        <>
            <div style={{ backgroundColor: "skyblue", height: "87.8vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
                {/* <h1>Contact</h1> */}
                <NavLink to="/form" style={{ listStyle: "none", textDecoration: "none", fontSize: "larger", fontWeight: "900" }}> Sign In</NavLink>
            </div>
        </>

    )
}


export default Contact
