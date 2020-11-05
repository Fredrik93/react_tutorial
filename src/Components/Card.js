import React from 'react'
import Card from 'react-bootstrap/Card'

function CustomizedCard(props) {
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
        borderRadius: "5px",

    }

    return (<div className="card" >
        <Card >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                <Card.Text> {props.sampleText}</Card.Text>
                <Card.Link style={stylingBtn} href={props.href}>{props.linkName} </Card.Link>
            </Card.Body>
        </Card>

    </div>)
}
export default CustomizedCard