import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import ViewProjectButton from './Buttons'
import '../App.css'
function Home() {

    return (<div>
        <Jumbotron>
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
    </p>
                <ViewProjectButton />
            </Container>
        </Jumbotron>
    </div >)
}

export default Home