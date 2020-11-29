import React from 'react'

function SecondTodoItem(props) {
    const style = {

    }
    return (
        <span className="todo-item">
            <input type="checkbox" checked={props.dataItem.completed}
                onChange={() => { props.handleChange(props.dataItem.id) }} />
            {props.dataItem.chore} </span>)
} export default SecondTodoItem