import React from 'react'
import Product from './Product'
import schoolProducts from './schoolProducts'

const productComponent = schoolProducts.map(function (item) {
    return <Product key={item.id} name={item.name} />
})

function Products(item) {
    return (
        <div>

            {productComponent}
        </div>
    )
}
export default Products