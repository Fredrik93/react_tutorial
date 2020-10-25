import React from 'react'
import jokeData from './jokesData'
import Joke from './Joke'
function Jokes() {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const doubleNums = nums.map(function (num) {
        return num * 2
    })
    console.log(doubleNums)

    return (<div>
        <Joke jokes={{
            question: "da",
            punchline: "s. "
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