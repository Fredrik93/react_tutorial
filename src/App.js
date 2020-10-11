import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Checkbox from "./Components/Checkboxes";
import Nav from './Components/Nav'
function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Checkbox} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    )
}

export default App