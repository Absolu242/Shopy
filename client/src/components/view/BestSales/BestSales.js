import React,{Component} from 'react';
import Product from '../Product/Product';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../_actions/user_actions';
import styled from 'styled-components';
import LoadMore from '../LoadMore/LoadMore';
import './BestSales.css'
class BestSales extends Component {
  
    UNSAFE_componentWillMount(){
        this.props.fetchProducts();
    }
    render() {
        const productItems = this.props.products
        .filter ((product, limit) => limit < 4)
        .map( product =>
            product.featured === true ? <Product key={product.id} item={product} /> : null
        )

    return (
        <div className='Best'>
            <div className='Title'>
                <h2> <span className='orange'>BEST </span><span className='blue'>SALES</span></h2>
                <p>'Lorem Ipsum is simply dummy text of the printing and type setting industry </p>
            </div>
            <div className='Display'>
                {productItems}
            </div>
        </div>
    )
}

}

const mapStateToProps = state =>({
    products:state.products.filteredItems,
}) 
export default connect(mapStateToProps, {fetchProducts})(BestSales)

