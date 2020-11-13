import React from 'react'
import TodoItem from './TodoItem'
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
        console.log("checked", id)
    }

    render() {
        const todoItems = todosData.map(choreItem => <TodoItem key={choreItem.id} choreItem={choreItem} handleChange={this.handleChange} />)

        return (<div className="todo-list"> { todoItems} </div>)
    }
}
export default Todos