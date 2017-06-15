/**
 * Created by Iamnauber on 2017-06-11.
 */
import * as firebase from 'firebase';
const database = firebase.database();

var productsList = [];
var initialProducts = [{name: 'Exhale', price: 199, amount: 100, image: 'https://www.jrrshop.com/media/catalog/product/m/g/mgn7ozl.png', cartAmount: 0, id: 0},
    {name: 'Gordon Wong', price: 1, amount: 100, image: 'http://content.rankinghero.com/walls/620680/activity_620680_1433197100_630.jpg', cartAmount: 0, id: 1}];

database.ref('products').on('value', (snapshot) => {

    let data = snapshot.val();


    for (let product in data) {
        productsList.push({
            name: data[product].name,
            price: data[product].price
        })
    }
});

const productsReducer = (state = {

    products: initialProducts,
    previousProducts: [],
    readOnly: true,
    editText: 'Edit',
    changedProducts: [],
    editClass: 'edit-button'
}, action) => {
    let newState = {...state};
    let newProductsList = state.products;
    switch(action.type){

        case 'UPDATE_STATE':
            let productsList1 = [];

            database.ref('products').on('value', snapshot => {

                let data = snapshot.val();


                for (let product in data) {
                    productsList1.push({
                        name: data[product].name,
                        price: data[product].price,
                        amount: 10,
                        id: productsList1.length-1
                    })
                }
            });

            newState = {...state, products: productsList1}
            return newState;

        case 'ADD_NEW_PRODUCT':

            let product = action.payload;
            product.id = newProductsList.length;
            newProductsList.push(product);
            newState = {...state, products: newProductsList }
            return newState;

        case 'INCREASE_CART_AMOUNT':
            newProductsList[action.payload.id].amount--;
            newProductsList[action.payload.id].cartAmount++
            newState = {...state, products: newProductsList }
            return newState;

        case 'DECREASE_CART_AMOUNT':
            newProductsList[action.payload.id].amount++;
            newProductsList[action.payload.id].cartAmount--
            newState = {...state, products: newProductsList }
            return newState;

        case 'REMOVE_FROM_CART':
            newProductsList[action.payload.id].amount += newProductsList[action.payload.id].cartAmount;
            newProductsList[action.payload.id].cartAmount -= newProductsList[action.payload.id].cartAmount;
            newState = {...state, products: newProductsList }
            return newState;

        case 'EDITABLE':
        newState.readOnly == true ? newState = {...newState, editClass: 'cancel-edit-button', readOnly: false, editText: 'Cancel edit', changedProducts: {...newState.products}} : newState={...newState, editClass: 'edit-button', readOnly: true, changedProducts: [], editText: 'Edit'}
            return newState;

        case 'UPDATE_CHANGED_PRODUCT':
            let value = action.payload.target.value;
            typeof action.payload.target.value == "number" ? Number(value) : null;
            console.log(action.payload.target.getAttribute('data-key') + ' = key')
            let newChangedProducts = newState.products;
            newChangedProducts[action.payload.target.getAttribute('data-key')][action.payload.target.id] = value;
            newState = {...newState, changedProducts: newChangedProducts}
            return newState;

        case 'SUBMIT_CHANGE':
            let newProducts = newState.changedProducts;
            newState.changedProducts.length == 0 ? newState = {...newState, changedProducts:  []} : newState = {...newState, products: newProducts, readOnly: true, editText: 'Edit'};

            return newState;

        default:
                return newState;



    }



}


export default productsReducer;
