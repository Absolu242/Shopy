import React,{Component} from 'react';
import Product from '../../view/Product/Product';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../_actions/user_actions';

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



`
class Products extends Component {
  
  UNSAFE_componentWillMount(){
      this.props.fetchProducts();
  }
  render() {
      const productItems = this.props.products.map( product =>
          <Product key={product.id} item={product}/>
      )
      return (
          <Container>
              {productItems}
          </Container>
      )
  }
}

const mapStateToProps = state =>({
  products:state.products.filteredItems,
})

export default connect(mapStateToProps, {fetchProducts})(Products)

