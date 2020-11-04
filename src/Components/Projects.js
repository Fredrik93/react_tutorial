import React from 'react'
import CustomizedCard from './Card'
function List() {



    return (

        <div  >

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
    // return (<div style={{ marginTop: '20vh' }} >
    //     <Link style={styling} to="/cars">Cars </Link>
    //     <Link style={styling} to="/products" >Products</Link>
    //     <Link style={styling} to="/jokes" > Jokes </Link>
    //     <Link style={styling} to="/contacts"> Contacts </Link>
    //     <Link style={styling} to="/todos"> Todos </Link>
    //     <Link style={styling} to="/time">Time</Link>
    //     <Link style={styling} to="/checkboxes" >Checkboxes</Link>
    //     <ViewProjectButton />


    // </div >
    // )
}
export default List