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
                            sampleText="lil project"
                            linkName="View"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <CustomizedCard
                            title="products"
                            subtitle="small javascript practice"
                            href="/products"
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <CustomizedCard
                            title="Jokes"
                            subtitle="small javascript practice"
                            href="/jokes"
                            sampleText="lil project"
                            linkName="View" />

                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Contacts"
                            subtitle="small javascript practice"
                            href="/contacts"
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Todos"
                            subtitle="small javascript practice"
                            href="/todos"
                            sampleText="lil project"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>

                        <CustomizedCard
                            title="Time"
                            href="/time"
                            linkName="View" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="Statepractice"
                            href="/statePractice"
                            linkName="View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomizedCard
                            title="logged In"
                            href="/loggedIn"
                            linkName="View"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
        </Container>
    )
}
export default ProjectsCarousel