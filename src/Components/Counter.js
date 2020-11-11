import React, { Fragment } from 'react'


class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
        this.handleCounter = this.handleCounter.bind(this)
    }
    handleCounter() {
        this.setState(previousState => {
            return {
                number: previousState.number + 1
            }
        })
        console.log()
    }


    render() {


        const stylingNumber = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: "15vh",
            fontSize: "20vh"

        }
        const stylingButton = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: "3vh"

        }


        return (
            <Fragment>
                <div style={stylingNumber} >
                    <span>{this.state.number}</span>
                </div>

                <div style={stylingButton}>
                    {/* when the method is part of the class we need the 'this.' */}
                    <button className="btn-lg btn-success" onClick={this.handleCounter} >Change!</button>
                </div>
            </Fragment>
        )
    }
}


export default Counter