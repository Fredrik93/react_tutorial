import React from 'react'
import { Container } from 'react-bootstrap'

class ApiData extends React.Component {
    constructor() {
        super()
        this.state = {
            myApiResponse: "",
            character: {}
        }

    }
    testCallApi() {
        fetch('http://localhost:3001/testAPI')
            .then(res => res.text())
            .then(res => this.setState({ myApiResponse: res }))
    }

    callStartWarsApi() {
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(res => this.setState({ character: res }))
    }
    componentDidMount() {
        this.callStartWarsApi()
        this.testCallApi()
    }

    render() {
        return (
            <Container>
                <p className="centerItem" style={{ border: "1px solid gray" }} > {this.state.myApiResponse} </p>
                <p className="centerItem" style={{ border: "1px solid gray" }} > {this.state.character.name} </p>

            </Container>
        )
    }

}
export default ApiData