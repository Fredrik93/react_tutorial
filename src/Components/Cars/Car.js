import React from 'react'
import { Container } from 'react-bootstrap'

function Car(props) {
    console.log(props.make)
    const styling = {
        borderBottom: "1px solid grey",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh"

    }
    return (
        <Container>
            <div style={styling} >

                <h3> Make: {props.make} <br /> Year: {props.year} </h3>

            </div></Container>)
}
export default Car