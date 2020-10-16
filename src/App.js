import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Checkbox from "./Components/Checkboxes";
import Nav from './Components/Nav'
import Time from './Components/Time'
function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/checkboxes" component={Checkbox} />
                    <Route path="/about" component={About} />
                    <Route path="/time" component={Time} />
                </Switch>
            </div>
        </Router>
    )
}

export default App