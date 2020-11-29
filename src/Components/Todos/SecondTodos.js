import React from 'react'
import Item from './SecondTodoItem'
import todosData from './todosData'
class SecondTodos extends React.Component {
    constructor() {
        super()
        this.state = {
            completedChores: false,
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    showChores = todosData.map(dataItem => {
        return <Item
            handleChange={this.handleChange}
            chore={dataItem.chore}
            dataItem={dataItem}
            completo={dataItem.completed}
            key={dataItem.id} />
    })

    render() {

        return (<div > {this.showChores} </div>)
    }
} export default SecondTodos