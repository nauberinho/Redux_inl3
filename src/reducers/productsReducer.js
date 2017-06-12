/**
 * Created by Iamnauber on 2017-06-11.
 */
import * as firebase from 'firebase';
const database = firebase.database();

const productsReducer = (state = {

    products: [{name: 'hej', price: 0}],
    previousProducts: [],


}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'UPDATE_STATE':

            database.ref('products').on('value', snapshot => {
                let productsList = [];
                let data = snapshot.val();


                for (let product in data) {
                    console.log('inside loop')
                    console.log(productsList)
                    productsList.push({
                        name: data[product].name,
                        price: data[product].price
                    })
                }

                newState = {...state, products: productsList}
            });

            break;


        case 'SET_NEW_PRODUCT':
            newState = {
                ...state,
                products: [...state.products, action.payload]
            };
            break;

            default:
                break;
    }

    return newState;


}


export default productsReducer;
