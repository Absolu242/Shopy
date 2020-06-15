import React, { Component } from 'react';
import store from '../../../data/store';
import Product from '../../view/Product/Product';

class Products extends Component {
    
    constructor(props){
        super(props);

        this.state={
            collections: store,
        }
    }

    render() {
        const {collections}=this.state;
        return (
            <div>
                {
                     collections.map(({items}) =>(
                      <Product key={items.id}  item={items} />
                     ))
                }
            </div>
        );
    }
}

export default Products;

