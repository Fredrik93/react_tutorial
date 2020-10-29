import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
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
                <Link style={navStyle} to="/products" >Products</Link>
                <Link style={navStyle} to="/jokes" > Jokes </Link>
                <Link style={navStyle} to="/contacts"> Contacts </Link>
                <Link style={navStyle} to="/todos"> Todos </Link>
                <Link style={navStyle} to="/time">Time</Link>
                <Link style={navStyle} to="/checkboxes" ><li>Checkboxes </li></Link>
                <Link style={navStyle} to="/about" ><li>About</li></Link>
            </ul>

        </nav>
    )


}
export default Nav