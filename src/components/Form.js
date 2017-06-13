import React, { Component } from 'react';

export default class Form extends Component {

    render(){

        return(
            <div>
                <input onKeyUp={this.props.setName} className='setNameInput' type="text"/>
                <input onKeyUp={this.props.setPrice} className='setPriceInput' type="text"/>
                <button className="setNewProduct" onClick={() => this.props.addNewProduct(this.props.formState.tempProduct)}>Set New Product</button>
            </div>


        )
    }

}