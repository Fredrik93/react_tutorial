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
        background: "linear-gradient(0deg, rgba(0,237,240,1) 0%, rgba(11,0,232,1) 59%)",
        justifyContent: "center",
        color: "white",
        display: "flex",
        textAlign: "center",

    }

    return (<div >
        <Card style={cardStyle} >
            <Card.Body>
                <Card.Title style={{ fontSize: "6vh" }}>{props.title}</Card.Title>
                <Card.Subtitle style={{ fontSize: "3vh" }}>{props.subtitle}</Card.Subtitle>
                <Card.Text> {props.sampleText}</Card.Text>
                <Card.Link style={stylingBtn} href={props.href}>{props.linkName} </Card.Link>
            </Card.Body>
        </Card>

    </div>)
}
export default CustomizedCard