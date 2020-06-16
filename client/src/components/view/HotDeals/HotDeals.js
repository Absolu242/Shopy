import React from 'react';
import store from '../../../data/store';
import Product from '../../view/Product/Product';
import styled from 'styled-components';

const Container = styled.div`

height:inherit;
position:relative;
text-align:center;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
padding: 20px 200px;

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
