import React from 'react'

function ContactCard(props) {
    const style = {
        width: "50vh",
        paddingTop: "5vh",
        border: '1px solid gray',
    }
    return (<div>

        <img style={style} src={props.contact.imgUrl} alt="contact" ></img>
        <h2>{props.contact.name}</h2>
        <p> Phone: {props.contact.phone}</p>
        <p> Email: {props.contact.email} </p>
        <p> Race: {props.contact.race}</p>
    </div>)
}
export default ContactCard