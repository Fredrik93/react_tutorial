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


    render() { return (<ConditionalItem isLoading={this.state.isLoading} />) }

}



export default Conditional