import React from 'react'

function ConditionalItem(props) {
    return (<div>
        <h1>Nav</h1>
        {props.isLoading ? <h1> Loading... </h1> : <h3>Something conditional </h3>}
        <h3> Footer</h3>
    </div>)
}
export default ConditionalItem