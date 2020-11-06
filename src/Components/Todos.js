import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import TodoItems from './TodoItem'
import todosData from './todosData'
function Todos() {

    const todosComponent = todosData.map(chore => {
        return (<TodoItems chore={chore.text} />)
    })


    return (<div className="todo-list" >
        {todosComponent}
    </div>)
}
export default Todos