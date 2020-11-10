import React, { Fragment } from "react";
import Nav from './Components/Nav'
import Routing from './Routing'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myAPIResponse: "" }
    }
    callAPI() {
        fetch('http://localhost:3001/testAPI')
            .then(res => res.text())
            .then(res => this.setState({ myAPIResponse: res }))
    }

    componentDidMount() {
        this.callAPI()
    }

    render() {
        return (
            <Fragment>
                <Nav />
                <Routing />
                <p className="App-intro"> {this.state.myAPIResponse} </p>
            </Fragment>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <p> Welcome, {this.props.username}! </p>
            </header>)
    }
}

class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay = hours
        if (hours < 12) {
            timeOfDay = `morning! its ${timeOfDay} o'clock`
        } else {
            timeOfDay = `evening! its ${timeOfDay} o'clock`
        }
        return (
            <div>
                {timeOfDay}
            </div>)

    }
}

export default App