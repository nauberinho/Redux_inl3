/**
 * Created by Iamnauber on 2017-06-11.
 */
import * as firebase from 'firebase';
const database = firebase.database();
let productsList = [{name: 'hej', price: 0}];



const productsReducer = (state = {

    products: productsList,
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
            break;


            default:
                break;
    }
    console.log('newState: ', newState)
    return newState;


}


export default productsReducer;
