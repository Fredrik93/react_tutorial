import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import ViewProjectButton from './Buttons'
import '../App.css'
function Home() {
    const JumbotronStyling = {
        background: "lightGray",
        textAlign: "center",
        height: "25vh",
        padding: "2vh",
        marginTop: "2vh",
        backgroundImage: "url(https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)",
        backgroundSize: "no-repeat",


    }
    return (<div>
        <Jumbotron fluid style={JumbotronStyling}>
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