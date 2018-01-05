import expect from 'expect';
import {ADD_PRODUCT, ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS} from 'src/actions/actions'
import {addProduct} from 'src/actions/actions';
describe('>>>A C T I O N --- Test addProduct', ()=>{
    it('+++ actionCreator addProduct', () => {
        const add = addProduct({name: 'prod1', colors: ['red']})
        expect(add).toEqual({ type:ADD_PRODUCT, output: {name: 'prod1', colors: ['red']} })
    });
});