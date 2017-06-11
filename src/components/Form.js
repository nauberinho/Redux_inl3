import React, { Component } from 'react';

export default class Form extends Component {

    render(){

        return(
            <div>
                <input onKeyUp={this.props.setTempName} className='setNameInput' type="text"/>
                <input onKeyUp={this.props.setTempPrice} className='setPriceInput' type="text"/>
                <button className="'setNewProduct" onClick={() => this.props.setNewProduct(this.props.form.tempProduct)}></button>
            </div>


        )
    }

}