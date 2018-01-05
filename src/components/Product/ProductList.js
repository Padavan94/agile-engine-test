import React, { Component } from 'react';
import Product from './Product'
import './ProductList.scss';

class ProductList extends Component {

    render() {
        let products = this.props.products.map((product) => {
          return <Product deleteProduct={this.props.deleteProduct} key={product._id} product={product} />
        })

        return (
          <section className="ProductList">
              <h2 className="ProductList__title">Product list</h2>
              {this.props.fetching? 'Loading...' : products}
          </section>
        );
    }
}


export default ProductList;
