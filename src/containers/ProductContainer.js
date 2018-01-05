import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts, deleteProduct} from '../actions/actions';
import ProductList from '../components/Product/ProductList'

class ProductContainer extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                <ProductList
                    products={this.props.products}
                    fetching={this.props.fetching}
                    deleteProduct={this.props.deleteProduct}
                />
            </div>
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
        getProducts: () => {dispatch(getProducts())},
        deleteProduct: (id) => {dispatch(deleteProduct(id))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);