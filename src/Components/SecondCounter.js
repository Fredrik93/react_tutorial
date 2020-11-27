import React from 'react'

class SecondCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.clickBtn = this.clickBtn.bind(this)
    }
    clickBtn() {
        console.log("clicked")
    }
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "10vh" }} >
                <h1 style={{ fontSize: "20vh", border: "2px solid black" }} > 0 </h1>
                <button className="btn btn-info" onClick={this.clickBtn} >Click me! </button>
            </div>
        )
    }
}
export default SecondCounter