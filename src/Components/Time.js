import React from 'react'

let timeOfDay

function whatTimeOfTheDay() {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }
}


function Time() {
    whatTimeOfTheDay();
    return (<div> <h1>Good {timeOfDay} </h1> </div>)
}

export default Time