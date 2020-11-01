import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
function Nav() {

    const navStyle = {
        color: 'white'

    }
    const logoStyle = {
        color: 'white',
        textDecoration: 'none'
    }


    return (
        <nav>
            <Link style={logoStyle} to="/" > <h3>Home</h3>  </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/about" ><li>About</li></Link>
                <Link style={navStyle} to="/thingsIveDone">Projects</Link>
            </ul>

        </nav>
    )


}
export default Nav