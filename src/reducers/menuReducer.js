/**
 * Created by Iamnauber on 2017-06-14.
 */
import * as firebase from 'firebase';
const database = firebase.database();

const github = new firebase.auth.GithubAuthProvider();

const menuReducer = (state = {
    view: 'productsview',
    authenticated: false
}, action ) => {
    let newState = {...state};
    switch(action.type){

        case 'CHANGE_VIEW':
            newState = {...newState, view: action.payload.target.id}
            return newState;

        case 'AUTHENTICATION':
            if(newState.authenticated == false){
                firebase.auth().signInWithPopup(github).then(result => {
                    let user = result.user;
                    newState = {
                        ...state,

                        user: {
                            username: user.displayName,
                            uid: user.uid,
                            admin: true
                        },

                        authenticated: true
                    }})
            }
             else{ firebase.auth().signOut().then(() => {
                newState = {
                    ...state, authenticated: false, user: {}
                }
            })
            }


        default:
            return state;



    }

}

export default menuReducer;
