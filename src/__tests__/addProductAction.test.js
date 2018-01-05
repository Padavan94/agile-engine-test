//never used tests before

import expect from 'expect';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_ERROR} from '../actions/actions'
import configureMockStore from 'redux-mock-store'
import {getProductsSuccess, getProducts, getProductsError} from '../actions/actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates GET_PRODUCTS_SUCCESS when fetching items has been done', () => {
    fetchMock
      .getOnce('http://localhost:9000/api/', {items: []})

    const expectedActions = [
      { type: GET_PRODUCTS },
      { type: GET_PRODUCTS_SUCCESS, items: [] }
    ]
    const store = mockStore({ items: [] })

    return store.dispatch(getProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})