/**
 * Created by Iamnauber on 2017-06-11.
 */

import React, { Component } from 'react';


export default class Products extends Component {

    render(){

        return(
            <div>

                <ul>
                    {this.props.productsState.products.map((product, index) => {
                        return(
                        <li key={index}><span>{product.name}</span></li>

                        )



                    })

                    }
                </ul>

            </div>

        )
    }


}
