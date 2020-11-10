import React, { Fragment } from 'react'
import Projects from './Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card, Button, Container, Row } from 'react-bootstrap';
import uicScreenshot from '../../Assets/screenshot-homepage.png'
function List() {

    return (
        <Container  >
            <Row>
                <Card style={{ width: '18rem', marginTop: "10vh", marginLeft: "13vh" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title> agnart.se </Card.Title>
                        <Card.Text>
                            A website project with a client
                    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>

                </Card>
                <Card style={{ width: '18rem', marginTop: "10vh", marginLeft: "1vh" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Jomiola.se</Card.Title>
                        <Card.Text>
                            A website project with a client

                    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>

                </Card>
                <Card style={{ width: '18rem', marginTop: "10vh", marginLeft: "1vh" }}>
                    <a href="https://ullmanitconsulting.se/" >
                        <Card.Img variant="top" src={uicScreenshot} />
                    </a>
                    <Card.Body>
                        <Card.Title>Ullman IT Consulting</Card.Title>
                        <Card.Text>
                            The website for my business
                    </Card.Text>
                        <form action="https://ullmanitconsulting.se/">
                            <Button type="submit" variant="primary">Go somewhere</Button>
                        </form>
                    </Card.Body>

                </Card>
            </Row>
            <Projects />

        </Container>
    )
}
export default List