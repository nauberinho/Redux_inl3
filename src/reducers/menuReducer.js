/**
 * Created by Iamnauber on 2017-06-14.
 */
import * as firebase from 'firebase';
const database = firebase.database();

const menuReducer = (state = {
    view: 'productsview'
}, action ) => {
    let newState = {...state};
    switch(action.type){

        case 'CHANGE_VIEW':
            newState = {...newState, view: action.payload.target.id}
            return newState;

        default:
            return state;



    }

}

export default menuReducer;
