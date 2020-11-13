import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'


function Todos() {

    const todosComponent = todosData.map(function (choreItem) {
        return <TodoItem chore={choreItem.chore} completed={choreItem.completed} key={choreItem.id} />
    })

    return (<div className="todo-list"> { todosComponent} </div>)
}
export default Todos