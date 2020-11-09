import React from 'react'
import TodoItems from './TodoItem'
import todosData from './todosData'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render() {

        const todosComponent = this.state.todos.map(item =>
            //chore is the prop that were passing down to todoItem.js
            <TodoItems key={item.id} chore={item} />)

        return (<div className="todo-list" >
            { todosComponent}
        </div>)
    }
}
export default Todos