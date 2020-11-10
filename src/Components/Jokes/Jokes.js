import React from 'react'
import jokeData from './jokesData'
import Joke from './Joke'
function Jokes() {

    const words = ["for", "hi", "ta", "mm", "yoo", "wait"]
    words.forEach(function (word) {
        console.log(`${word} hey words!`)
    })
    const filteredWords = words.filter(function (word) {

        return word.length > 3


    })
    console.log(filteredWords + " filtering ")

    const jokesComponent = jokeData.map(function (joke) {
        return <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
    })



    return (
        <div style={{ textAlign: "center", marginTop: "10vh" }} > {jokesComponent} </div>
    )
}

export default Jokes