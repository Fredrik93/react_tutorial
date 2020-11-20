import React from 'react'
import { Link } from 'react-router-dom'
class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            value: '',
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleCounter = this.handleCounter.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
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
    handleInputChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //this is used to prevent some type of bug in the future for setting state.
    // handleInputChange(event) {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
    render() {
        const stylingBtn = {
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            marginTop: "5vh",
            borderRadius: "5px"

        }
        const styling = {
            paddingTop: "20vh",
            textAlign: "center",
        }
        return (
            <div style={styling}>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br></br>
                <form>
                    <input type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <input type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"

                        onChange={this.handleInputChange} />
                </form>
                <form>
                    <h1> {this.state.firstName} {this.state.lastName}</h1>
                    <textarea value="some text" onChange={this.handleChange}
                    />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        />is friendly?
                </label>

                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleChange}
                        /> Male
                </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === 'female'}
                            onChange={this.handleChange}
                        /> Female
                </label>
                    <h3> You are a {this.state.gender}</h3>
                    <br />
                    <label>Favorite color: </label>
                    <select value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">green</option>
                        <option value="white">white</option>
                    </select>
                    <h3>Your favourite color is {this.state.favColor}</h3>
                    <button>Submit</button>
                </form>
                <Link to="/formspractice" style={stylingBtn}>View test project </Link>
            </div>)
    }
}
export default Forms