import React, { Component } from 'react'


function clickingButton() {
    alert("ive been clicked!")
}

class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedin: true
        }
    }
    render() {
        let wordDisplay
        if (this.state.isLoggedin === true) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (<div>
            <div className="todo-list" >
                Youre currently logged {wordDisplay}
            </div>
            <span className="todo-list" >
                <img style={{ width: "25vh" }} src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" />
                <br />
                <br />
                <button className="btn-success" onClick={() => { alert("using es6 to write awesome short functions cool") }} > Click me</button>
            </span> </div>)
    }
}



export default LoggedIn