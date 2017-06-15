/**
 * Created by Iamnauber on 2017-06-11.
 */

import React, { Component } from 'react';


export default class Products extends Component {

    /*componentDidMount() {
        this.props.updateProductsState;
    }*/

    render(){


        let liMap = this.props.productsState.products.map((product, key) => {

            return(
                <div className='product-div' key={key}>


                    <div>
                        <div className='product-name-div'>{this.props.productsState.readOnly== false ? <input data-key={key} id='name' onKeyUp={this.props.updateChangedProduct} defaultValue={product.name}/> :   <span>{product.name}</span> }</div><br/>
                        <div className='product-image-div'>{this.props.productsState.readOnly== false ? <input data-key={key} id='image' onKeyUp={this.props.updateChangedProduct} defaultValue={product.image}/> :   <img className='product-image' src={product.image} alt={product.image}></img>}</div>
                        <div className='product-price-div'>{this.props.productsState.readOnly== false ? <input data-key={key} id='price' onKeyUp={this.props.updateChangedProduct} defaultValue={product.price}/> :   <span>{product.price} $</span> }</div><br/>
                        <br/>
                        <div>{this.props.productsState.readOnly== false ? <input data-key={key} id='amount' onKeyUp={this.props.updateChangedProduct} defaultValue={product.amount}/> :   <span>{product.amount}</span> } in store</div>


                        {product.amount > 0 && this.props.productsState.readOnly != false ?
                        <button className='add-to-cart' onClick={() => this.props.increaseCartAmount(this.props.productsState.products[key])}>Add to cart</button>

                        : null}

                        {product.amount  < 1 && this.props.productsState.readOnly != false ? <button>Not available in store</button> : null}



                    </div>
                </div>
            )
        })
        return(
            <div className='products-container'>
                <div className="edit-div">
                {this.props.productsState.products.length>0 ?
                    <button className={this.props.productsState.editClass} onClick={this.props.editable}>{this.props.productsState.editText}</button> : null}
                {this.props.productsState.readOnly == false ? <button className='submit-change-button' onClick={() => this.props.submitChange(this.props.productsState.changedProduct)}>Submit change</button> : null}
                </div>

                    {liMap}


            </div>

        )
    }


}
