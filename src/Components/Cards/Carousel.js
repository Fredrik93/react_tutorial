import React from 'react'
import CustomizedCard from './Card'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
function ProjectsCarousel() {
    const cardsStyling = {
        margin: "4vh",
        border: "2px solid #e7e7e7",
        borderRadius: "2vh",
        padding: ".5rem",
        background: "linear-gradient(0deg, rgba(0,237,240,1) 0%, rgba(11,0,232,1) 59%)",
        justifyContent: "center",
        color: "white",
        display: "flex",
        textAlign: "center",
    }
    return (
        <Container>
            <div style={cardsStyling}>
                <Carousel >
                    <Carousel.Item>

                        <CustomizedCard
                            title="Cars"
                            subtitle="small javascript practice"
                            href="/cars"
                            linkName="View"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <CustomizedCard
                            title="Products"
                            href="/products"
                            subtitle="lil project"
                            linkName="View" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <CustomizedCard
                            title="Jokes"
                            href="/jokes"
                            subtitle="Load data from another file"
                            linkName="View" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Contacts"
                            href="/contacts"
                            subtitle="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Todos"
                            href="/todos"
                            subtitle="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>

                        <CustomizedCard
                            title="Time"
                            href="/time"
                            subtitle="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Statepractice"
                            href="/statePractice"
                            subtitle="lil project"
                            linkName="View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Logged In"
                            href="/loggedIn"
                            subtitle="Conditional logic practice"
                            linkName="View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Counter"
                            href="/counter"
                            subtitle="Using states to update counter"
                            linkName="View"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        </Container>
    )
}
export default ProjectsCarousel