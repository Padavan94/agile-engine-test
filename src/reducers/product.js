import {
    GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR
} from "../actions/actions";

let initialState = {
    fetching: false,
    message: '',
    items: []
}

export default function product(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
        return {...state, fetching: true}
    case GET_PRODUCTS_SUCCESS:
          return {...state, items: action.payload, fetching: false}
    case GET_PRODUCTS_ERROR:
          return {...state, message: action.payload, fetching: false}

    case ADD_PRODUCT:
          return {...state, fetching: true}
    case ADD_PRODUCT_SUCCESS:
            return {...state, items: action.payload, fetching: false}
    case ADD_PRODUCT_ERROR:
      return {...state, message: action.payload, fetching: false}
    default:
        return state
  }
}