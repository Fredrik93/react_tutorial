import React, { Fragment } from 'react'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            otherNum: 0
        }
        this.handleCounter = this.handleCounter.bind(this)
        this.handleCounterForOtherNum = this.handleCounterForOtherNum.bind(this)
    }
    handleCounter() {
        this.setState(previousState => {
            return {
                number: previousState.number + 1
            }
        })
        console.log()
    }
    handleCounterForOtherNum() {
        this.setState(previousState => {
            return {
                otherNum: previousState.otherNum + 1
            }
        })
    }


    render() {
        const stylingNumber = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: "15vh",
            fontSize: "20vh",


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
                    <span style={{ padding: "5vh" }} >{this.state.otherNum}
                        <div style={stylingButton}>
                            <button className="btn-lg btn-info" onClick={this.handleCounterForOtherNum} > Change ! </button>
                        </div>
                    </span>
                    <span>{this.state.number}
                        <div style={stylingButton}>
                            {/* when the method is part of the class we need the 'this.' */}
                            <button className="btn-lg btn-success" onClick={this.handleCounter} >Change!</button>
                        </div>
                    </span>
                </div>

            </Fragment>
        )
    }
}


export default Counter