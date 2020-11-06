import React from 'react'
import '../App.css'
function Todos(props) {


    return (<div className="todo-item">
        <p > <input type="checkbox" /> {props.chore}</p>
    </div>)
}
export default Todos 