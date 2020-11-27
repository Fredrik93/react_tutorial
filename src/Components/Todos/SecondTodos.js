import React from 'react'
import Item from './SecondTodoItem'
class SecondTodos extends React.Component {
    render() {
        return (
            <div>
                <Item chore="clean" />
            </div>
        )
    }
} export default SecondTodos