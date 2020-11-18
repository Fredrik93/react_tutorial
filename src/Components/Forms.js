import React from 'react'

class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleCounter = this.handleCounter.bind(this)
    }
    handleCounter() {
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        })
    }
    render() {
        return (
            <div>
                <h3> {this.state.counter} </h3>
                <button onClick={this.handleCounter} >Click </button>
            </div>
        )
    }
}
export default Forms