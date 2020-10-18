import React from 'react'

let timeOfDay
const stil = {
    backgroundColor: "Green",
    fontSize: 25
}

function whatTimeOfTheDay() {
    const date = new Date()
    const hours = date.getHours()
    if (hours < 12) {
        timeOfDay = "Morning"
        stil.color = "yellow";

    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
        stil.color = "pink"
    }
}


function Time() {

    whatTimeOfTheDay();
    return (<div> <h1 style={stil}>Good {timeOfDay} </h1> </div>)
}

export default Time