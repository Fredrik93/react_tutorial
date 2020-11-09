import React from 'react'

function Car(props) {
    console.log(props.make)
    const styling = {
        borderBottom: "1px solid grey",
        width: "40vh"
    }
    return (<div style={styling} >

        <h3>Make: {props.make}</h3>
        <h3>Year: {props.year}</h3>
    </div>)
}
export default Car