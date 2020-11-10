import React from 'react'
import { Container } from 'react-bootstrap'

class ApiData extends React.Component {
    constructor() {
        super()
        this.state = { myApiResponse: "" }
    }
    testCallApi() {
        fetch('http://localhost:3001/testAPI')
            .then(res => res.text())
            .then(res => this.setState({ myApiResponse: res }))
    }
    componentDidMount() {
        this.testCallApi()
    }

    render() {
        return (
            <Container>
                <p className="centerItem" style={{ border: "1px solid gray" }} > {this.state.myApiResponse} </p>
            </Container>
        )
    }

}
export default ApiData