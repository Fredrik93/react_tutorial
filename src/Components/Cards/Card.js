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
        marginBottom: "4vh"

    }

    const cardStyle = {

        border: "2px solid #e7e7e7",
        borderRadius: "2vh",
        padding: ".5rem",
        justifyContent: "center",
        color: "white",
        display: "flex",
        textAlign: "center"
    }

    return (<div className="ProjectCards" >
        <Card style={cardStyle} >
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