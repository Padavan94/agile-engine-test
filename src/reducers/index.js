import {combineReducers} from 'redux'
import product from "./product"
import form from "./form"

let rootReducer = combineReducers({
    form,
    product
})

export default rootReducer;