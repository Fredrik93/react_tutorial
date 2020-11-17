import React from 'react'
import { Container } from 'react-bootstrap'

class ApiData extends React.Component {
    constructor() {
        super()
        this.state = {
            myApiResponse: "",
            character: {},
            loading: false,
            loadMyApi: false
        }

    }
    testCallApi() {
        fetch('http://localhost:3001/testAPI')
            .then(res => res.text())
            .then(res => this.setState({ myApiResponse: res, loadMyApi: false }))
    }

    callStartWarsApi() {
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(res => this.setState({ character: res, loading: false }))
    }
    componentDidMount() {
        this.setState({ loading: true })
        this.setState({ loadMyApi: true })
        this.callStartWarsApi()
        this.testCallApi()
    }

    render() {
        let loadBeforeDisplay = this.state.loading ? "Loading ..." : this.state.character.name
        let loadMyApi = this.state.loadMyApi ? "Loading ..." : this.state.myApiResponse

        return (
            <Container>
                <p className="centerItem" style={{ border: "1px solid gray" }} > {loadMyApi} </p>
                <p className="centerItem" style={{ border: "1px solid gray" }} > {loadBeforeDisplay} </p>

            </Container>
        )
    }

}
export default ApiData