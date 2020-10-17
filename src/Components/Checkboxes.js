import React, { useState, useEffect } from 'react'
function Checkbox() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const items = await data.json();
        console.log(items)
        setItems(items)


    }
    return (
        <h1>Checkbox Page</h1>
    )
}

export default Checkbox