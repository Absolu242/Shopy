import React,{Component} from 'react';
import Product from '../Product/Product';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../_actions/user_actions';

import styled from 'styled-components';
import LoadMore from '../LoadMore/LoadMore';
import './NewArrivals.css'
class NewArrivals extends Component {
  
    UNSAFE_componentWillMount(){
        this.props.fetchProducts();
    }
    render() {
        const productItems = this.props.products
        .filter ((product, limit) => limit < 4)
        .map( product =>
            <Product key={product.id} item={product}/>
        )
    return (
        <div className='New'>
            <div className='Title'>
                <h2> <span className='orange'>NEW</span><span className='blue'>ARRIVALS</span></h2>
                <p>'Lorem Ipsum is simply dummy text of the printing and type setting industry </p>
            </div>
            <div className='Display'>
                {productItems}
            </div>
            <LoadMore/>
        </div>
    )
}

}

const mapStateToProps = state =>({
    products:state.products.filteredItems,
}) 
export default connect(mapStateToProps, {fetchProducts})(NewArrivals)

