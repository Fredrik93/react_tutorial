import React, { Component } from 'react'

class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedin: true
        }
    }
    render() {
        const isLogged = this.state.isLoggedin
        function log() {
            if (isLogged) {
                return <h3> in </h3>
            } else {
                return <h3> Out</h3>
            }
        }
        return <div> Youre currently logged {log()} </div>
    }
}



export default LoggedIn