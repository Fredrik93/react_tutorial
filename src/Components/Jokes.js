import React from 'react'
import jokeData from './jokesData'
import Joke from './Joke'
function Jokes() {

    const jokesComponent = jokeData.map(function (joke) {
        return <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
    })

    return (
        <div> {jokesComponent} </div>
    )
}

export default Jokes