import React, { Fragment } from 'react'


class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }
    render() {

        function count() {
            this.state.number = this.state.number + 1;
            console.log(`Number is ${this.state.number}`)
        }
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
                    <button className="btn-lg btn-success" onClick={() => {
                        this.state.number = this.state.number + 1;
                        console.log(`Number is ${this.state.number}`)
                    }} >Change!</button>
                </div>
            </Fragment>
        )
    }
}


export default Counter