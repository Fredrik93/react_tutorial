import React from 'react'
import CustomizedCard from './Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
function List() {

    const cardsStyling = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 30vh)",
        gridAutoRows: "auto",
        gridGap: "0.5rem",
        margin: "5vh",
        justifyContent: "center"
    }

    return (

        <div style={cardsStyling} >

            <CustomizedCard
                title="Cars"
                subtitle="small javascript practice"
                href="/cars"
                sampleText="lil project"
                linkName="View"
            />
            <CustomizedCard
                title="products"
                subtitle="small javascript practice"
                href="/products"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Jokes"
                subtitle="small javascript practice"
                href="/jokes"
                sampleText="lil project"
                linkName="View" />


            <CustomizedCard
                title="Contacts"
                subtitle="small javascript practice"
                href="/contacts"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Todos"
                subtitle="small javascript practice"
                href="/todos"
                sampleText="lil project"
                linkName="View" />

            <CustomizedCard
                title="Time"
                href="/time"
                linkName="View" />



        </div>
    )
}
export default List