/**
 * Created by Iamnauber on 2017-06-14.
 */
import * as firebase from 'firebase';
const database = firebase.database();

var initialProducts = [{name: 'Exhale', price: 199, amount: 100, image: 'https://www.jrrshop.com/media/catalog/product/m/g/mgn7ozl.png', cartAmount: 0, id: 0}];

const cartReducer = (state = {
    cartProducts: initialProducts,
    total: 0
}, action) => {

    let newState = {...state};
    let newCartProducts = state.cartProducts;

    switch(action.type){
        case 'ADD_NEW_PRODUCT':
            let newProductsList = state.cartProducts
            let product = action.payload;
            product.cartAmount = 0;
            product.id = newProductsList.length;
            newProductsList.push(product);
            newState = {...state, cartProducts: newProductsList };
            return newState;

        case 'INCREASE_CART_AMOUNT':

            newCartProducts[action.payload.id].cartAmount++
            newState = {...state, cartProducts: newCartProducts, total: (newState.total + action.payload.price) }
            return newState;

        case 'DECREASE_CART_AMOUNT':
            newCartProducts[action.payload.id].cartAmount--
            newState = {...state, cartProducts: newCartProducts, total: newState.total - action.payload.price}
            return newState;

        case 'REMOVE_FROM_CART':
            newCartProducts[action.payload.id].amount += newCartProducts[action.payload.id].cartAmount;
            newCartProducts[action.payload.id].cartAmount -= newCartProducts[action.payload.id].cartAmount;
            newState = {...state, products: newCartProducts, total: 0 }
            return newState;

        default:
            return newState;
    }




}

export default cartReducer;