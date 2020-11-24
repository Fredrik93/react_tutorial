import React from 'react'

class MemeGenerator extends React.Component {

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
                <button>Click </button>
            </>)
    }
}
export default MemeGenerator