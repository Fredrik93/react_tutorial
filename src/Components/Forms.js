import React from 'react'

class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            value: '',
            firstName: ""
        }
        this.handleCounter = this.handleCounter.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleCounter() {
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        })
    }
    handleSubmit(event) {
        console.log("A name was submitted :" + this.state.value)
        event.preventDefault()
    }
    handleInputChange() {
        this.setState({
            firstName: "???"
        })
    }
    render() {
        const styling = {
            paddingTop: "20vh",
            textAlign: "center",
        }
        return (
            <div style={styling}>
                <div >
                    <h3> {this.state.counter} </h3>
                    <button onClick={this.handleCounter} >Click </button>
                </div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form>
                    <input type="text" placeholder="First Name" onChange={this.handleInputChange} />
                </form>
            </div>)
    }
}
export default Forms