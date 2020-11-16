import React from 'react'
import ConditionalItem from './ConditionalItem'


class Conditional extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            isLoggedIn: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
        setTimeout(() => {
            this.setState({
                isLoading: true
            })
        }, 2500)
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 4500)
    }
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                { this.state.isLoading === true ? <h3>Loading...</h3> : <ConditionalItem />}
                <div style={{ textAlign: "center", marginTop: "20vh" }}>
                    <h3> {this.state.isLoggedIn ? <h3>Logged In</h3> : <h3>Logged Out </h3>}</h3>
                    <button style={{ height: "4vh" }} className="btn btn-info" >{this.state.isLoggedIn ? <p>Log out</p> : <p>Log in</p>}</button>
                </div>
            </div >)
    }
}
export default Conditional