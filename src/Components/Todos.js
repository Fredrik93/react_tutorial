import React from 'react'
import TodoItems from './TodoItem'
import todosData from './todosData'
function Todos() {

    const todosComponent = todosData.map(item => <TodoItems key={item.id} item={item} />)


    return (<div className="todo-list" >
        {todosComponent}
    </div>)
}
export default Todos