import React from 'react'

class FormsPractice extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    render() {

        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange} /> name:{this.state.firstName} < br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange} /> Lastname: {this.state.lastName} < br />
                    <input placeholder="Age" age="age" onChange={this.handleChange} /> Age:  {this.state.age} < br />
                    < br />
                </form>
            </main>
        )
    }
} export default FormsPractice