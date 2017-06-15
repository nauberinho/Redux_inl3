/**
 * Created by Iamnauber on 2017-06-14.
 */

import React, { Component } from 'react';

export default class Menu extends Component {

    render(){

        return(
        <div className="menu-container">
            <button className='menu-tab' id="productsview" onClick={this.props.changeView}>Products</button>
            <button className='menu-tab' id="cartview" onClick={this.props.changeView}>My Cart</button>
            <button className='menu-tab' id="historyview" onClick={this.props.changeView}>My History</button>
            <button className='menu-tab' id="formview" onClick={this.props.changeView}>Add products</button>
            <button className='menu-tab' id="formview" onClick={this.props.authentication}>{this.props.view.authenticated==false ? 'Log In' : 'Log Out' }</button>
        </div>
        )
    }


}