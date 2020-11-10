import React, { Fragment } from 'react'
import Projects from './Carousel'
import CustomCard from './Card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Card } from 'react-bootstrap';
function List() {

    return (
        <Fragment>
            <Projects />

        </Fragment>
    )
}
export default List