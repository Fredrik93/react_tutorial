import React from 'react'
import Item from './SecondTodoItem'
import todosData from './todosData'
class SecondTodos extends React.Component {
    constructor() {
        super()
        this.state = {
            completedChores: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {
        this.setState((prev) => {
            console.log(prev)
        })
    }

    showChores = todosData.map(dataItem => {
        return <Item chore={dataItem.chore} completo={this.handleChange} key={dataItem.id} />
    })

    render() {

        return (<div > {this.showChores} </div>)
    }
} export default SecondTodos