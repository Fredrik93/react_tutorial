import React from 'react'

function ConditionalItem(props) {
    return (<div>
        <h1>Nav</h1>
        {props.isLoading === true ?
            <h1> Loading... </h1>
            : <h3>Something conditional </h3>}
    </div>)
}
export default ConditionalItem