import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            apiResponse: ""
        }
        this.callMyApi = this.callMyApi.bind(this)
    }
    callMyApi() {
        console.log("lalal")
        fetch("http://localhost:3001/testAPI")
            .then(response => response.text())
            .then(response => this.setState({ apiResponse: response }))

    }

    componentDidMount() {
    }

    render() {

        return (
            <>
                <h1>my Component has Mounted, Check the browser 'console'</h1>
                <p>API :{this.state.apiResponse}</p>
                <button onClick={this.callMyApi} >Click </button>
            </>)
    }
}
export default MemeGenerator