/**
 * Created by Iamnauber on 2017-06-11.
 */



export function updateProductsState(){
    return{
        type: 'UPDATE_STATE'
    }

}


export function addNewProduct (productObject){

    return{
        type: 'ADD_NEW_PRODUCT',
        payload: productObject
    }

}