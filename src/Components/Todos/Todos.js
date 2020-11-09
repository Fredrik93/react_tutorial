import React from 'react'
import TodoItems from './TodoItem'
import todosData from './todosData'
function Todos() {

    const todosComponent = todosData.map(item =>
        //chore is the prop that were passing down to todoItem.js
        <TodoItems key={item.id} chore={item} />)


    return (<div className="todo-list" >
        {todosComponent}
    </div>)
}
export default Todos