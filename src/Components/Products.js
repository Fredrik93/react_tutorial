import React from 'react'
import Product from './Product'
import schoolProducts from './schoolProducts'

const productComponent = schoolProducts.map(item => <Product key={item.id} name={item.name} />)

function Products() {
    return (
        <div>
            {productComponent}
        </div>
    )
}
export default Products