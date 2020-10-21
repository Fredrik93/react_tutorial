import React from 'react'

import Joke from './Joke'
function Jokes() {
    return (<div>
        <Joke jokes={{
            question: "What’s the best thing about Switzerland?",
            punchline: "I don’t know, but the flag is a big plus. "
        }} />
        <Joke jokes={{
            question: "How does a rabbi make coffee? ",
            punchline: "Hebrews it!"
        }} />
        <Joke jokes={{
            question: "Rest in peace boiling water. ",
            punchline: "You will be mist! "
        }} />
        <Joke jokes={{
            question: "Why don't scientists trust atoms?",
            punchline: "Because they make up everything! "
        }} />
        <Joke jokes={{
            question: "Two artists had an art contest. ",
            punchline: "It ended in a draw!"
        }} />
        <Joke jokes={{
            punchline:
                "I ate a clock yesterday, it was very time-consuming."
        }} />

    </div>)
}

export default Jokes