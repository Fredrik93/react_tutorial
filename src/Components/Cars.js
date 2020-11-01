import React from 'react'
import carData from './carData'
import Car from './Car'
const carComponent = carData.map(function (car) {
    return <Car key={car.id} make={car.make} year={car.year} />
})

function Cars() {

    return (<div>
        <Car make="volvo" year="100" />
        {carComponent}
    </div>)
}
export default Cars