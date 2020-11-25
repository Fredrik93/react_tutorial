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
        this.handleChange = this.handleChange.bind(this)
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
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {

        return (
            <>
                <Header />
                <form className="meme-form" >

                    <label>Top text : <input
                        name="topText"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.topText}
                    /> </label>
                    < br />

                    <label>Bottom text : <input
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        onChange={this.handleChange} /> </label>
                    <br />

                    <button className="btn btn-danger">
                        Gen  </button>
                </form>
                <p>Top text says: {this.state.topText}</p>
                <p>Bottom text says: {this.state.bottomText}</p>

            </>
        )
    }
}
export default MemeGenerator