import React from 'react'
import '../memeStyles.css'
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

    render() {

        return (
            <>
                <p className="meme" >show api call by clicking button : <br /> {this.state.apiResponse}</p>
                <button className="btn btn-success" onClick={this.callMyApi} >Click </button>
            </>
        )
    }
}
export default MemeGenerator