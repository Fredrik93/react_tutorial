import React from "react";
import Nav from './Components/Nav'
import Routing from './Routing'

function count() {
    function test() {
        console.log("wow")
    }
    return (<div style={{ display: "block", textAlign: "center" }} > <h3> 0</h3>
        <button className="btn btn-info" onClick={test}>Change number</button>
    </div>)
}
function App() {
    return (
        <div>
            <Nav />
            <Routing />
            {count()}
        </div>
    )
}
export default App