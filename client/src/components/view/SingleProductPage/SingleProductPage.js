import React,{Component} from 'react';
import ProductInfo from './Section/ProductInfo';
import NewsLetter from '../NewsLetter/NewsLetter';
import RelatedProducts from './Section/RelatedProducts';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../_actions/user_actions';

class SingleProductPage extends Component {

  UNSAFE_componentWillMount(){
      this.props.fetchProducts();
      
  }
  render() {
    const productId = this.props.match.params.productId;
    let itemType;

      const productItems = this.props.products
      .filter (product => product.id === parseInt(productId) )
      .map( product =>
          <ProductInfo key={product.id} item={product}/>
      )

      const type = this.props.products
      .filter (product => product.id === parseInt(productId) )
      .map( product =>
              itemType = product.type
      )

  return (
    <div>
      <div className='info'>
        {productItems}
      </div>

      <div className='related' style={{color:'white'}}>
        <RelatedProducts products={this.props.products} info={itemType}/>
      </div>
        
        <NewsLetter/>
    </div>
  );
}
}


const mapStateToProps = state =>({
    products:state.products.filteredItems,
    props:state.props,
}) 
export default connect(mapStateToProps, {fetchProducts})(SingleProductPage)
