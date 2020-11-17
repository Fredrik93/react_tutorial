import React from 'react'


function TodoItem(props) {
    let tickedStyle = { color: "gray", textDecoration: "line-through", fontStyle: "italic" }
    let tickedChore = props.choreItem.completed
        ? <p style={tickedStyle} >{props.choreItem.chore} </p>
        : <p>{props.choreItem.chore} </p>

    return (

        <span className="todo-item">
            <input type="checkbox" checked={props.choreItem.completed}
                onChange={() => { props.handleChange(props.choreItem.id) }} />
            {tickedChore} </span>)
} export default TodoItem