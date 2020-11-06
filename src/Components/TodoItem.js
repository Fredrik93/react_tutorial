import React from 'react'
import '../App.css'
function Todos(props) {


    return (<div className="todo-item">
        <p > <input type="checkbox" checked={props.item.completed} /> {props.item.text}</p>
    </div>)
}
export default Todos 