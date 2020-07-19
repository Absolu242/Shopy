import React from 'react'
import Products from '../Products/Products'
import FilterProducts from '../FilterProducts/FilterProducts'

function ProductCollection() {
    return (
        <div>
            <FilterProducts/>
            <Products/>
        </div>
    )
}

export default ProductCollection
