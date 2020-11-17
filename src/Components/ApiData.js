import React from 'react'
import { Container } from 'react-bootstrap'

class ApiData extends React.Component {
    constructor() {
        super()
        this.state = {
            myApiResponse: "",
            character: {},
            loading: false
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
        this.setState({ loading: true })
        this.callStartWarsApi()
        this.testCallApi()
    }

    render() {
        let loadBeforeDisplay = this.state.loading ? <p> {this.state.character.name} </p> : <p> Loading ... </p>

        return (
            <Container>
                <p className="centerItem" style={{ border: "1px solid gray" }} > {this.state.myApiResponse} </p>
                <div className="centerItem" style={{ border: "1px solid gray" }} > {loadBeforeDisplay} </div>

            </Container>
        )
    }

}
export default ApiData