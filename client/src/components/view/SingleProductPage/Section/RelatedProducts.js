import React from 'react'
import Product from '../../Product/Product';
import styled from 'styled-components';


const Related = styled.div`
width:100%;
position:relative;
text-align:center;
padding: 50px 0;
`

const Display=styled.div`
   position:relative;
    display:flex;
    padding: 20px 180px;
    justify-content:space-between;
`
const Title=styled.div`
    text-align:center;
    padding: 20px 0;

    p{
        color:#495662;
    }
    .orange{
        color:#ff5912;
    }

    .blue{
        color:#34404b;
    }

`

function RelatedProducts({info,products}) {
    return (
        <Related>
            <Title>
                <h2> <span className='orange'>RELATED  </span><span className='blue'>PRODUCTS</span></h2>
                <p>'Lorem Ipsum is simply dummy text of the printing and type setting industry </p>
            </Title>
            <Display>
            {products
            .filter ((item, limit) => limit < 4)
            .map (item => (item.type === info ? <Product key={item.id} item={item} /> : null
            ))}
            </Display>
        </Related>
    )
}

export default RelatedProducts;