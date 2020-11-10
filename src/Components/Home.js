import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import ViewProjectButton from './Buttons'

import '../App.css'
function Home() {

    return (<div>
        <Container style={{ backgroundColor: "black" }}>

            <Jumbotron>
                <h1>Welcome!</h1>
                <p>
                    This website is showcasing various react projects. It is created for the purpose of practicing elements. Enjoy!
    </p>
                <ViewProjectButton />
            </Jumbotron>
            <Jumbotron />
            <Jumbotron />
            <Jumbotron />

        </Container>

    </div >)
}

export default Home