/**
 * Created by Iamnauber on 2017-06-11.
 */
import * as firebase from 'firebase';
const database = firebase.database();

var productsList = [];
var initialState = [{name: 'Exhale', price: 100}];
database.ref('products').on('value', (snapshot) => {

    let data = snapshot.val();


    for (let product in data) {
        productsList.push({
            name: data[product].name,
            price: data[product].price
        })
    }
});

const productsReducer = (state = {

    products: initialState,
    previousProducts: [],
}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'UPDATE_STATE':
            let productsList1 = [];
            database.ref('products').on('value', snapshot => {

                let data = snapshot.val();


                for (let product in data) {
                    productsList1.push({
                        name: data[product].name,
                        price: data[product].price
                    })
                }
            });

            newState = {...state, products: productsList1}
            return newState;

        case 'ADD_NEW_PRODUCT':
            let newProductsList = state.products
            newProductsList.push(action.payload);
            newState = {...state, products: newProductsList }
            return newState;

            default:
                return newState;

    }



}


export default productsReducer;
