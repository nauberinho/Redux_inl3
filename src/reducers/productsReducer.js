/**
 * Created by Iamnauber on 2017-06-11.
 */
import * as firebase from 'firebase';
const database = firebase.database();
let productsList = [{name: 'hej', price: 0}];
let initialState = {}
database.ref('products').once('value', snapshot => {

    let data = snapshot.val();


    for (let product in data) {
        console.log('inside loop')
        console.log('productslist ', productsList)
        productsList.push({
            name: data[product].name,
            price: data[product].price
        })
    }
    initialState = {

        products: productsList,
        previousProducts: [],
    }
});

const productsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){

        case 'UPDATE_STATE':

            database.ref('products').on('value', snapshot => {
                let productsList1 = [];
                let data = snapshot.val();


                for (let product in data) {
                    productsList1.push({
                        name: data[product].name,
                        price: data[product].price
                    })
                }

                newState = {...state, products: productsList1}
            });

            break;


            default:
                break;
    }

    return newState;


}


export default productsReducer;
