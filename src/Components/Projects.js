import React from 'react'
import { Link } from 'react-router-dom'
import ViewProjectButton from './Buttons'
import Card from 'react-bootstrap/Card'
import CustomizedCard from './Card'
function List() {
    const stylingBtn = {
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
    const projectData = [
        {
            id: 1,
            title: "Cars"
        }
    ]
    return (

        <div>

            <CustomizedCard
                title="Cars"
                subtitle="small javascript practice"
                href="/cars"
                sampleText="lil project"
                linkName="View"
            />
            <CustomizedCard
                title="products"
                subtitle="small javascript practice"
                href="/products"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Jokes"
                subtitle="small javascript practice"
                href="/jokes"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Contacts"
                subtitle="small javascript practice"
                href="/contacts"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Todos"
                subtitle="small javascript practice"
                href="/todos"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Time"
                href="/time"
                linkName="View" />

        </div>
    )
    // return (<div style={{ marginTop: '20vh' }} >
    //     <Link style={styling} to="/cars">Cars </Link>
    //     <Link style={styling} to="/products" >Products</Link>
    //     <Link style={styling} to="/jokes" > Jokes </Link>
    //     <Link style={styling} to="/contacts"> Contacts </Link>
    //     <Link style={styling} to="/todos"> Todos </Link>
    //     <Link style={styling} to="/time">Time</Link>
    //     <Link style={styling} to="/checkboxes" >Checkboxes</Link>
    //     <ViewProjectButton />


    // </div >
    // )
}
export default List