import React from 'react'

function ContactCard(props) {
    console.log(props)
    const style = {
        width: "50vh",
        paddingTop: "5vh",
        border: '1px solid gray'
    }
    return (<div>
        <img style={style} src={props.imgUrl}></img>
        <h2>{props.name}</h2>
        <p> Phone: {props.phone}</p>
        <p> Email: {props.email} </p>
        <p> Race: {props.race}</p>
    </div>)
}
export default ContactCard