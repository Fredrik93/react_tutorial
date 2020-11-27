import React from 'react'
import Item from './SecondTodoItem'
import todosData from './todosData'
class SecondTodos extends React.Component {

    showChores = todosData.map(dataItem => {
        return <Item chore={dataItem.chore} key={dataItem.id} />
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