import React, { Component } from 'react';
import { connect } from 'react-redux'
import Product from './Product'
import {getProducts} from '../../actions/actions'
import './ProductList.scss';

class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        let products = this.props.products.map((product) => {
          return <Product key={product._id} product={product} />
        })

        return (
          <section className="ProductList">
              <h2 className="ProductList__title">Product list</h2>
              {this.props.fetching? 'Loading...' : products}
          </section>
        );
    }
}

function mapStateToProps (state) {
  return {
    products: state.product.items,
    fetching: state.product.fetching
  }
}

function mapDispatchToProps(dispatch) {
    return({
        getProducts: () => {dispatch(getProducts())}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
