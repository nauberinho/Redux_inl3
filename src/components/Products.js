/**
 * Created by Iamnauber on 2017-06-11.
 */

import React, { Component } from 'react';


export default class Products extends Component {

    componentDidMount() {
        this.props.updateProductsState;
    }

    render(){
        let liMap = this.props.productsState.products.map((product, key) => {

            return(

                <li key={key}><span>{product.name}</span><br/><span>{product.price}</span></li>

            )
        })
        return(
            <div>

                <ul>
                    {liMap}
                </ul>

            </div>

        )
    }


}
