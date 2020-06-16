import React from 'react'
import Product from '../Product/Product';
import store from '../../../data/store';
import styled from 'styled-components';
import LoadMore from '../LoadMore/LoadMore';

const New = styled.div`
width:100%;
position:relative;
text-align:center;
padding: 50px 0;


`

const Display=styled.div`
   position:relative;
    display:flex;
    padding: 20px 200px;
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

function NewArrivals() {
    return (
        <New>
            <Title>
                <h2> <span className='orange'>NEW</span><span className='blue'>ARRIVALS</span></h2>
                <p>'Lorem Ipsum is simply dummy text of the printing and type setting industry </p>
            </Title>
            <Display>
            {store.items.filter ((item, limit) => limit < 4)
                        .map (item => (
            <Product key={item.id} item={item} />
            ))}
            </Display>
            <LoadMore/>
        </New>
    )
}

export default NewArrivals
