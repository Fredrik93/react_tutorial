import React from 'react'
import { ThemeProvider } from 'react-bootstrap'

class FormsPractice extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {

        return (
            <main style={{ textAlign: "center", marginTop: "10vh" }} >
                <form >
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange} /> < br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange} />< br />
                    <input placeholder="Age" type="number" name="age" onChange={this.handleChange} />< br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={this.handleChange}
                        /> Male</label>
                    < br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={this.handleChange}
                        /> Female</label>

                    < br />
                </form>


                <h1>Entered Information </h1>
                <div>
                    <h3>Your name : {this.state.firstName} {this.state.lastName}</h3>
                    <h3>Your age : {this.state.age}</h3>
                    <h3>Gender: {this.state.gender}</h3>
                </div>
                <br /> <button>Submit</button>

            </main>
        )
    }
} export default FormsPractice