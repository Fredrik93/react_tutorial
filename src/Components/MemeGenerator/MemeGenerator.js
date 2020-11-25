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
            randomImage: 'https://i.imgflip.com/4nlown.jpg',
            allMemeImgs: []
        }
        this.callMyApi = this.callMyApi.bind(this)
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
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
                <Header />
                <form className="meme-form" >
                    <label><input name="topText" onChange={() => { console.log("clicked") }} />Top text : </label>
                    < br />
                    <label><input name="bottomText" onChange={() => { console.log("clicked") }} />Bottom text : </label>
                    <br />

                    <button className="btn btn-danger">
                        Gen
                </button>
                </form>
            </>
        )
    }
}
export default MemeGenerator