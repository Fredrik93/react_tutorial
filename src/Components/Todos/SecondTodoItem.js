import React from 'react'

function SecondTodoItem(props) {
    const style = {
        borderBottom: "2px solid lightgray",
        textAlign: "center",
        marginTop: "10vh",

    }
    return (
        <div>
            <h2 style={style}> {props.chore} <input onChange={() => { props.handleChange(props.dataItem.id) }} checked={props.completo} type="checkbox" />  </h2>
        </div>
    )
} export default SecondTodoItem