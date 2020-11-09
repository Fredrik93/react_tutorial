import React from 'react'
import ContactCard from './ContactCard'
function Contacts() {
    return (<div>
        <ContactCard
            contact={{
                name: "The big boss",
                imgUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                phone: "0700 12 42 12",
                email: "fredrikullma@lalal.com",
                race: "little doggo"
            }}
        />
        <ContactCard
            contact={{
                name: "Doggie"
                , imgUrl: "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                , phone: "0700 00 21 43"
                , email: "doggdog@lalal.com"
                , race: "big doggo"
            }} />
        <ContactCard
            contact={{
                name: "John"
                , imgUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                , phone: "0700 23 42 12"
                , email: "fredrikullma@lalal.com"
            }} />
        <ContactCard
            contact={{
                name: "Lina"
                , imgUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                , phone: "0700 12 42 12"
                , email: "Lina@lalal.com"
            }} />
    </div>)


} export default Contacts