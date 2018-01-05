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
export const GET_FORM_VALIDATE = 'GET_FORM_VALIDATE'
export const GRAB_FORM_COLORS = 'GRAB_FORM_COLORS'

//form actions
export function getFormValidate(e) {
    let target = e.target.value
    let reg = /^[0-9a-zA-Z]+$/;
    let isFormValid = target.length > 3 && target.length < 9 && reg.test(target)

    let formData = {
        name: e.target.value,
        isFormValid,
        validationState: isFormValid? 'success' : 'error'
    }

    return {
        type: GET_FORM_VALIDATE,
        payload: formData
    }
}

export function grabFormColors(colors) {
    console.log('colorsArray', colors)

    return {
        type: GRAB_FORM_COLORS,
        payload: colors
    }
}


//PRODUCT ACTIONS
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

//add product

export function addProductSuccess(message) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: message
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
          dispatch(addProductSuccess(response.status))
          dispatch(getProducts())
      })
      .catch(function (error) {
          dispatch(addProductError(error.message))
      });
    }
}

//delete product

export function deleteProductSuccess(message) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: message
  }
}

export function deleteProductError(message) {
  return {
    type: DELETE_PRODUCT_ERROR,
    payload: message
  }
}

export function deleteProduct(id) {

  return (dispatch) => {
      axios.post('http://localhost:9000/api/delete', {id})
      .then(function (response) {
          dispatch(deleteProductSuccess(response.status))
          dispatch(getProducts())
      })
      .catch(function (error) {
          dispatch(deleteProductError(error.message))
      });
    }
}

