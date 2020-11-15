import React from 'react'

function ConditionalItem(props) {
    if (props.isLoading === true) {
        return (
            <h1> Loading... </h1>
        )
    } else {
        return <h3>Something conditional </h3>
    }
}
export default ConditionalItem