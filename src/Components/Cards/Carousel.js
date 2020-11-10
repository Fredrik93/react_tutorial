import React from 'react'
import CustomizedCard from './Card'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'
function ProjectsCarousel() {
    const cardsStyling = {
        margin: "4vh"
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
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <CustomizedCard
                            title="Jokes"
                            href="/jokes"
                            sampleText="Load data from another file"
                            linkName="View" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Contacts"
                            href="/contacts"
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Todos"
                            href="/todos"
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>

                        <CustomizedCard
                            title="Time"
                            href="/time"
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Statepractice"
                            href="/statePractice"
                            sampleText="lil project"
                            linkName="View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Logged In"
                            href="/loggedIn"
                            sampleText="Conditional logic practice"
                            linkName="View"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        </Container>
    )
}
export default ProjectsCarousel