import React, { Component } from 'react'
import Header from '../Header'
import '../memeStyles.css'
class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            apiResponse: '',
            topText: '',
            bottomText: '',
            randomImage: 'https://i.imgflip.com/4nlown.jpg'
        }
        this.callMyApi = this.callMyApi.bind(this)
        this.callToMemeAPI = this.callToMemeAPI.bind(this)
    }
    callMyApi() {
        console.log("lalal")
        fetch("http://localhost:3001/testAPI")
            .then(response => response.text())
            .then(response => this.setState({ apiResponse: response }))
    }

    callToMemeAPI() {
        console.log("memeapi call")
    }

    render() {

        return (
            <>
                <Header />
                <p>{this.callToMemeAPI()}</p>
                <img src={this.state.randomImage} alt="meme" />
                <br />
                <br />
                <br />
                <br />
                <p className="meme" >show api call by clicking button : <br /> {this.state.apiResponse}</p>
                <button className="btn btn-success" onClick={this.callMyApi} >Click </button>
            </>
        )
    }
}
export default MemeGenerator