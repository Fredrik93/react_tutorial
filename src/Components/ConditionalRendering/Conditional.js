import React from 'react'
import ConditionalItem from './ConditionalItem'


class Conditional extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            prevState.isLoggedIn = !prevState.isLoggedIn
            console.log("prevState logged in: ", prevState.isLoggedIn, " \n this.state.isLogged:", this.state.isLoggedIn)
            return { thisObjectCanBeCalledWhatever: prevState.isLoggedIn }

        })
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
        }, 2000)
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3500)
    }
    render() {
        let buttonText = this.state.isLoggedIn ? <p>Log out</p> : <p>Log in</p>
        let displayText = this.state.isLoggedIn ? <h3>Logged In</h3> : <h3>Logged Out </h3>
        return (

            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                {this.state.isLoading === true
                    ?
                    <h3> Loading...</h3>
                    :
                    <ConditionalItem />}

                <div style={{ textAlign: "center", marginTop: "20vh" }}>
                    {displayText}
                    <button onClick={this.handleClick}
                        style={{ height: "35px" }} className="btn btn-info" >
                        {buttonText}</button>
                </div>
            </div >
        )
    }
}
export default Conditional