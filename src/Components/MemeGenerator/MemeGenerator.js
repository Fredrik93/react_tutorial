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
        this.showRandomMeme = this.showRandomMeme.bind(this)
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
    showRandomMeme(event) {
        //this prevents the page from refreshing and setting the image back to default
        event.preventDefault()
        let randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        console.log(this.state.allMemeImgs[randNum])
        this.setState({ randomImage: this.state.allMemeImgs[randNum].url })
    }
    render() {

        return (
            <>
                <Header />
                <form className="meme-form" onSubmit={this.showRandomMeme}  >
                    <input
                        placeholder="Top text"
                        name="topText"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.topText}
                    />
                    <input
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        onChange={this.handleChange}
                        placeholder="Bottom text" />
                    <button className="btn btn-success" >Generate</button>

                </form>

                <div className="meme" >
                    <h2 className="top" > {this.state.topText} </h2>
                    <h2 className="bottom" > {this.state.bottomText} </h2>
                    <img src={this.state.randomImage} alt="someimg" />


                </div>

            </>
        )
    }
}
export default MemeGenerator