import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'


class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }


    handleCheckbox(id) {
        console.log("checked", id)
    }

    render() {
        const todosComponent = todosData.map(function (choreItem) {
            return <TodoItem chore={choreItem.chore} completed={choreItem.completed} key={choreItem.id} />
        })

        return (<div className="todo-list"> { todosComponent} </div>)
    }
}
export default Todos