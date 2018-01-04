import axios from 'axios'

//there are only 2 entity, product and form

//product action constants
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR'

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR'

//form action constants
export const GET_FORM_VALIDATE = 'ADD_PRODUCT'

//form actions
export function getFormValidate(event) {

    return {
        type: GET_PRODUCTS_SUCCESS
    }
}

//product actions
export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products.data
  }
}

export function getProductsError(message) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: message
  }
}

export function getProducts() {

  return (dispatch) => {
      axios.get('http://localhost:9000/api/')
      .then(function (response) {
          dispatch(getProductsSuccess(response))
      })
      .catch(function (error) {
          dispatch(getProductsError(error.message))
      });
    }
}

export function addProductSuccess(product) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: product.data
  }
}

export function addProductError(message) {
  return {
    type: ADD_PRODUCT_ERROR,
    payload: message
  }
}

export function addProduct(product) {

  return (dispatch) => {
      axios.post('http://localhost:9000/api/save', product)
      .then(function (response) {
          dispatch(addProductSuccess(response))
          dispatch(getProducts())
      })
      .catch(function (error) {
          dispatch(addProductError(error.message))
      });
    }
}


//form actions