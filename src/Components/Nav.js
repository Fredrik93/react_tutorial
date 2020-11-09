import React from 'react'
import '../App.css'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
function navigation() {
    const NavStyling = {
        marginLeft: "10vh"
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={NavStyling} className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/cars">Cars</NavDropdown.Item>
                        <NavDropdown.Item href="/time">Time</NavDropdown.Item>
                        <NavDropdown.Item href="/jokes">Jokes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )


}
export default navigation