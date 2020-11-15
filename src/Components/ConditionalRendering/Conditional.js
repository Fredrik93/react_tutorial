import React from 'react'
import ConditionalItem from './ConditionalItem'


class Conditional extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }


    render() {
        return (
            <div>
                {this.state.isLoading === true ? <h3>Loading...</h3> : <ConditionalItem />}


            </div>)
    }
}



export default Conditional