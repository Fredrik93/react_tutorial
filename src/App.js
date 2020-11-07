import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Checkbox from "./Components/Checkboxes";
import Nav from './Components/Nav'
import Time from './Components/Time'
import Todos from './Components/Todos'
import Contacts from './Components/Contacts'
import Jokes from './Components/Jokes'
import Home from './Components/Home'
import Products from './Components/Products'
import Cars from './Components/Cars'
import Projects from './Components/Projects'

class App extends React.Component {
    render() {
        return (
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
                                </div>
                            </div>
                        </>
                    </Switch>

                </div>
            </Router>

        )
    }
}

export default App