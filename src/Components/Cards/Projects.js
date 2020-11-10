import React, { Fragment } from 'react'
import Projects from './Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card, Button, Container, Row } from 'react-bootstrap';
import uicScreenshot from '../../Assets/screenshot-homepage.png'
import agnartScreenShot from '../../Assets/agnart-screenshot.png'
import jomiolaScreenShot from '../../Assets/jomiola-screenshot.png'

function List() {

    return (
        <Container  >
            <Row>
                <Card style={{ width: '18rem', marginTop: "10vh", marginLeft: "9vh" }}>
                    <a href="https://agnart.se/" target="_blank">
                        <Card.Img variant="top" src={agnartScreenShot} />
                    </a>
                    <Card.Body>
                        <Card.Title> agnart.se </Card.Title>
                        <Card.Text>
                            A website project with a client
                    </Card.Text>
                        <form action="https://agnart.se/" >
                            <Button type="submit" variant="primary">Check it Out</Button>
                        </form>
                    </Card.Body>

                </Card>
                <Card style={{ width: '18rem', marginTop: "10vh", marginLeft: "5vh" }}>
                    <a href="https://jomiola.se/" target="_blank">
                        <Card.Img variant="top" src={jomiolaScreenShot} />
                    </a>
                    <Card.Body>
                        <Card.Title>Jomiola.se</Card.Title>
                        <Card.Text>
                            A website project with a client

                    </Card.Text>
                        <form action="https://ullmanitconsulting.se/">
                            <Button type="submit" variant="primary">Check it Out</Button>
                        </form>
                    </Card.Body>

                </Card>
                <Card style={{ width: '18rem', marginTop: "10vh", marginLeft: "5vh" }}>
                    <a target="_blank" href="https://ullmanitconsulting.se/" >
                        <Card.Img variant="top" src={uicScreenshot} />
                    </a>
                    <Card.Body>
                        <Card.Title>Ullman IT Consulting</Card.Title>
                        <Card.Text>
                            The website for my business
                    </Card.Text>
                        <form action="https://ullmanitconsulting.se/">
                            <Button type="submit" variant="primary">Check it Out</Button>
                        </form>
                    </Card.Body>

                </Card>
            </Row>
            <Projects />

        </Container>
    )
}
export default List