import  React from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import About from './Components/About'
import Checkboxes from './Components/Checkboxes'
function App() {
    return ( 
        <Router>
            <div> 
            <Switch>
            <Route path="/" exact component={Checkboxes} />
            <Route path="/about" component={About}/>
            </Switch>
            </div>
            </Router>
      )
}

export default App