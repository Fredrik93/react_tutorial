import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Checkbox from "./Components/Checkboxes";
import Nav from './Components/Nav'
import Time from './Components/Time'
import Todos from './Components/Todos/Todos'
import Contacts from './Components/Contacts/Contacts'
import Jokes from './Components/Jokes/Jokes'
import Home from './Components/Home'
import Products from './Components/Products'
import Cars from './Components/Cars/Cars'
import Projects from './Components/Cards/Projects'
import StatePractice from "./Components/StatePractice";
import LoggedIn from "./Components/LoggedIn";

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

                <Router>
                    <div >

                        <Nav />

                        <Switch >
                            <>
                                <div  >
                                    <Route path="/" exact component={Home} />
                                    <div >
                                        <Route path="/projects" component={Projects} />
                                        <Route path="/cars" component={Cars} />
                                        <Route path="/products" component={Products} />
                                        <Route path="/contacts" component={Contacts} />
                                        <Route path="/todos" component={Todos} />
                                        <Route path="/jokes" component={Jokes} />
                                        <Route path="/checkboxes" component={Checkbox} />
                                        <Route path="/about" component={About} />
                                        <Route path="/time" component={Time} />
                                        <Route path="/statePractice" component={StatePractice} />
                                        <Route path="/loggedIn" component={LoggedIn} />
                                    </div>
                                </div>
                            </>
                        </Switch>

                    </div>
                </Router>
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