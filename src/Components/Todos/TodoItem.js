import React from 'react'

function TodoItem(props) {
    return (<h3 className="todo-item">
        <input type="checkbox" checked={props.completed} onChange={() => { console.log("lala") }} />
        {props.chore}  </h3>)
} export default TodoItem