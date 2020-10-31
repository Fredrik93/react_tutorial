import React from 'react'
import cars from './carData'
import Car from './Car'
const carComponent = cars.map(function (car) {
    return <Car key={car.id} make={car.make} />
})

function Cars() {

    return (<div> {carComponent} </div>)
}
export default Cars