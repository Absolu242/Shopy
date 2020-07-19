import React from 'react';
import store from '../../../data/store';
import Product from '../../view/Product/Product';
import styled from 'styled-components';

const Container = styled.div`

width:100%;
height:inherit;
position:relative;
text-align:center;
padding: 50px 0;
display:flex;
justify-content:center;
flex-wrap:wrap;

`;

function HotDeals () {
  return (
    <Container>
      {store.items.map (item => (
        item.hot === true ? <Product key={item.id} item={item} /> : null
      ))}

    </Container>
  );
}

export default HotDeals;
