/**
 * Created by Iamnauber on 2017-06-11.
 */

export function setName(event){
return{
    type: 'SET_NAME',
    payload: event.target.value
}

}

export function setPrice(event){
    return{
        type: 'SET_PRICE',
        payload: event.target.valu
    }

}
