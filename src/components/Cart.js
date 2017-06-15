/**
 * Created by Iamnauber on 2017-06-14.
 */

import React, { Component } from 'react';

export default class Cart extends Component{

    render(){
    console.log(this.props.cartState)
        let liMap = this.props.cartState.cartProducts.map((product, key) => {

            return(


                product.cartAmount > 0 ?
                <div className="cart-product" key={key}>
                    <span>{product.name}</span><br/>
                    <span>{product.price}</span><br/>
                    <span>{product.cartAmount} in cart</span><br/>
                    <img className='cart-image' src={product.image}></img><br/>


                    {product.cartAmount > 1 ? <button onClick={() => this.props.decreaseCartAmount(this.props.cartState.cartProducts[key])}>-</button>
                        :  <button disabled>-</button> }

                    <button onClick={() => this.props.removeFromCart(this.props.cartState.cartProducts[key])}>Remove from cart</button>

                    {product.amount > 0 ? <button  onClick={() => this.props.increaseCartAmount(this.props.cartState.cartProducts[key])}>+</button> : <button  disabled >+</button>}

                </div>

                    : null



            )
        })

        return(



            <div className="cart-container">
                <div>Total sum: {this.props.cartState.total}</div>
                <ul>

                    {liMap}

                </ul>

            </div>

        )

    }


}
