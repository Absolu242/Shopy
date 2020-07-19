import React from 'react'


function ProductImage ({item}) {
    const {imageUrl} = item;

    return (
       <div>
           {imageUrl.map((image,i) => 
            <img src={image} alt={i}/>
            )}
            <p>Here is image URL</p>
       </div>
    );
}  
export default ProductImage;
