import React from 'react'
import { Link } from 'react-router-dom'
import ViewProjectButton from './Buttons'

function List() {
    const styling = {
        fontSize: 24,
        border: "2px solid grey",
        display: "block",
        textDecoration: "none",
        width: "30vh",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
        marginTop: "0.2vh",
    }

    return (<div style={{ marginTop: '20vh' }} >
        <Link style={styling} to="/cars">Cars </Link>
        <Link style={styling} to="/products" >Products</Link>
        <Link style={styling} to="/jokes" > Jokes </Link>
        <Link style={styling} to="/contacts"> Contacts </Link>
        <Link style={styling} to="/todos"> Todos </Link>
        <Link style={styling} to="/time">Time</Link>
        <Link style={styling} to="/checkboxes" >Checkboxes</Link>
        <ViewProjectButton />


    </div >
    )
}
export default List