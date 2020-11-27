import React from 'react'
import Item from './SecondTodoItem'
import todosData from './todosData'
class SecondTodos extends React.Component {

    showChores = todosData.map(Item => {
        return Item.chore
    })

    render() {
        const style = {

        }
        return (
            <div>
                {this.showChores}
            </div>
        )
    }
} export default SecondTodos