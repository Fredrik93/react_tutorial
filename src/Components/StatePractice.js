import React from 'react'

class StatePractice extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "yes"
        }
    }

    render() {
        const styling = {
            marginTop: "10vh",
            textAlign: "center",
            border: "1px solid gray",
            display: 'block-flex',
            alignItems: 'center',
            justifyContent: 'center',





        }
        return (
            <div style={styling} >
                <p style={{ borderBottom: "1px solid gray" }} >  Are states really important to understand?</p>
                <h1> Answer from state: {this.state.answer} !!! </h1>
            </div >
        )
    }
}
export default StatePractice