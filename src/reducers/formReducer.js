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

    switch(action.type){

        case 'SET_NAME':
            state = {...state, tempProduct: {...state.tempProduct, name: action.payload}}
            break;
        case 'SET_PRICE':
            state = {...state, tempProduct: {...state.tempProduct, price: action.payload}}
            break;

        case 'PUSH_TO_DATABASE':
            let thisState = state;
            database.ref('products/').push(
            state.tempProduct

            )
            state = {
                tempProduct: {}

            }
            break;

            default:
              break;
    }

    return state;
}

export default formReducer;
