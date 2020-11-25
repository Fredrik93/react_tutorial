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
        //pull name and value properties from event.target
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
                <div className="meme" >
                    <h2 className="top" > {this.state.topText} </h2>
                    <img src={this.state.randomImage} alt="someimg" />

                    <h2 className="bottom" > {this.state.bottomText} </h2>
                </div>

            </>
        )
    }
}
export default MemeGenerator