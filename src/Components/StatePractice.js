import React, { Component } from 'react'

class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            answer: "yes",
            age: 27,
            name: "Fredfred",
            unreadMessages: ["call mum", "New email available"]
        }
    }

    render() {
        const styling = {
            marginTop: "10vh",
            textAlign: "center",
            display: 'block-flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
        return (
            <div style={styling} >
                <h1>My name is {this.state.name}</h1>
                <h3>I'm {this.state.age} Years old</h3>
                <br></br>
                <p style={{ borderTop: "1px solid gray" }} >  Are states really important to understand?</p>
                <h1> Answer from state: {this.state.answer} !!! </h1>
                { this.state.unreadMessages.length > 0 ? <h3> You have {this.state.unreadMessages.length} messages available</h3> : null}
            </div >
        )
    }
}
export default StatePractice