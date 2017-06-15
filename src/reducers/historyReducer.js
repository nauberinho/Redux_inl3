/**
 * Created by naube on 2017-06-15.
 */

import * as firebase from 'firebase';
const database = firebase.database();

const historyReducer = (state = {

    actions: []


}, action) => {
    let newActionsList = state.actions;
    newActionsList.push(action.type);
    let newState = {...state, actions: newActionsList};

    return newState;




/*
                type: 'SET_NAME',

                type: 'SET_PRICE',

                type: 'SET_AMOUNT',

                type: 'SET_IMAGE',

                type: 'PUSH_TO_DATABASE'

                        type: 'UPDATE_STATE'

                        type: 'ADD_NEW_PRODUCT'

                        type: 'EDITABLE'

                        type: 'SUBMIT_CHANGE'

                        type: 'UPDATE_CHANGED_PRODUCT'

                        type: 'DECREASE_CART_AMOUNT'
                        type: 'REMOVE_FROM_CART'

                        type: 'CHANGE_VIEW',

                        type: 'AUTHENTICATION',
*/


}

export default historyReducer;
