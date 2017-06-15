/**
 * Created by Iamnauber on 2017-06-14.
 */

export function changeView(event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }

}

export function authentication(event){
    return {
        type: 'AUTHENTICATION',
        payload: event
    }

}
