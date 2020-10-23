import React from 'react'


function showQuestion(props) {
    if (props.jokes.question != null) {
        return (<div><p>Question: {props.jokes.question}</p> </div>)
    }
}
function showPunchLine(props) {
    if (props.jokes.punchline != null) {
        return (<div><p>Punchline: {props.jokes.punchline}</p></div>)
    }
}


function Joke(props) {
    const styling = {
        marginTop: "20vh",
        marginLeft: "20vh",
        borderBottom: "1px solid gray",
        fontSize: 30,

    }
    return (<div>
        <h3 style={{ display: props.jokes.question ? "block" : "none" }}> Question: {props.jokes.question} </h3>
        <h3 style={{ color: !props.jokes.question && "#888888" }}> Punchline: {props.jokes.punchline}</h3>
    </div>)
}



export default Joke