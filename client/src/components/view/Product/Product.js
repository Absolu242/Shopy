import React from 'react'

function Product({item,addItem,like}) {

    const {title,imageUrl,description,price,color,sizes} =item;

    return (
        <div>
            <div className='image' style={{
                backgroundImage:`url(${imageUrl.imageUrl[0]})`
            }}>
            <div className='info'>
                <span className='title'>{title}</span>
                <span className='price'>{price}</span>
            </div>
            </div>
        </div>
    )
}

export default Product
