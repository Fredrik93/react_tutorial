import React from 'react'
import { Link } from 'react-router-dom'
function ViewProjectsButton() {
    const styling = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        marginTop: "5vh",
        borderRadius: "5px"

    }
    return (<div>
        <Link to="/projects" style={styling} >View projects </Link>
    </div>)
}
export default ViewProjectsButton