import React, { Component } from 'react'

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
        return <div className="todo-list" > Youre currently logged {wordDisplay} </div>
    }
}



export default LoggedIn