import React from 'react'
import TodoItems from './TodoItem'
import todosData from './todosData'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        console.log("clicked", id)
    }
    render() {

        const todosComponent = this.state.todos.map(item =>
            //chore is the prop that were passing down to todoItem.js
            <TodoItems key={item.id} chore={item} handleChange={this.handleChange} />)

        return (<div className="todo-list" >
            { todosComponent}

        </div>)
    }
}
export default Todos