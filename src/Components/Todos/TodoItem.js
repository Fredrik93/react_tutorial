import React from 'react'
import '../../App.css'

function Todos(props) {
    return (<div className="todo-item">
        <p >
            <input type="checkbox"
                checked={props.chore.completed}
                onChange={() => { console.log("Changed!") }}
            /> {props.chore.text}
        </p>
    </div>)
}
export default Todos    