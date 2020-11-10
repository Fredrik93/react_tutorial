import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Checkbox from "./Components/Checkboxes";
import Time from './Components/Time'
import Todos from './Components/Todos/Todos'
import Contacts from './Components/Contacts/Contacts'
import Jokes from './Components/Jokes/Jokes'
import Home from './Components/Home'
import Products from './Components/Products/Products'
import Cars from './Components/Cars/Cars'
import Projects from './Components/Cards/Projects'
import StatePractice from "./Components/StatePractice";
import LoggedIn from "./Components/LoggedIn";
import Counter from "./Components/Counter";
import ApiData from "./Components/ApiData";

function Routing() {
    return (
        <Router>
            <div >

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
                                <Route path="/counter" component={Counter} />
                                <Route path="/apis" component={ApiData} />
                            </div>
                        </div>
                    </>
                </Switch>

            </div>
        </Router>
    )
}
export default Routing