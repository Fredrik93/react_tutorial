import React from 'react'

function TodoItem(props) {
    return (<h3 className="todo-item">
        <input type="checkbox" checked={props.choreItem.completed}
            onChange={() => { props.handleChange(props.choreItem.id) }} />
        {props.choreItem.chore}  </h3>)
} export default TodoItem