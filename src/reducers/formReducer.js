/**
 * Created by Iamnauber on 2017-06-11.
 */

import * as firebase from 'firebase';
const database = firebase.database();

const formReducer = (state = {
        tempProduct: {
            name: '',
            price: 0
        }


}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'SET_NAME':
            newState = {...state, tempProduct: {...state.tempProduct, name: action.payload}}
            break;
        case 'SET_PRICE':
            newState = {...state, tempProduct: {...state.tempProduct, price: action.payload}}
            break;

        case 'PUSH_TO_DATABASE':

            database.ref('products/').push(
                newState.tempProduct

            )
            newState = {
                tempProduct: {}

            }
            break;

            default:
              break;
    }

    return newState;
}

export default formReducer;
