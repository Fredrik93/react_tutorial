import React from 'react'

class FormsPractice extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: 0
        }
    }
    handleChange() {
        console.log("lal")
    }
    render() {

        return (
            <main>
                <form>
                    <input placeholder="First Name" onChange={this.handleChange} /> name:{this.state.firstName} < br />
                    <input placeholder="Last Name" onChange={this.handleChange} /> < br />
                    <input placeholder="Age" onChange={this.handleChange} /> < br />
                    < br />
                </form>
            </main>
        )
    }
} export default FormsPractice