/**
 * Created by Iamnauber on 2017-06-11.
 */

export function setNewProduct(productObject){
    return{
        type: 'SET_NEW_PRODUCT',
        payload: productObject
    }

}

export function updateProductsState(){
    return{
        type: 'UPDATE_STATE'
    }

}
