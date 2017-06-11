/**
 * Created by Iamnauber on 2017-06-11.
 */

const productsReducer = (state = {

    products: [],
    previousProducts: [],


}, action) => {

    switch(action.type){

        case 'SET_NEW_PRODUCT':
            state = {...state, products: state.products.push(action.payload)}
            break;

            default:
                break;
    }

    return state;


}


export default productsReducer;
