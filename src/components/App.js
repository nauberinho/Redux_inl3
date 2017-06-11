import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from './Form';
import Products from './Products';
import {connect} from 'react-redux';
import Main from './Main.js';
import {
    setName,
    setPrice
} from '../actions/formActions.js';
import
setNewProduct
 from '../actions/productsActions.js';

class App extends Component {
    changeUserName(newName) {

    }
  render() {
    return (
      <div className="container">

          <Main changeUserName={this.changeUserName.bind(this)}/>
          <Form productsState={this.props.productsState} setName={this.props.setName} setPrice={this.props.setPrice}/>
          <Products productsState={this.props.productsState}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        form: state.formReducer,
        productsState: state.productsReducer

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (event) => {
            dispatch(setName(event))

        },

        setPrice: (event) => {
            dispatch(setPrice(event))
        },

        setNewProduct: (productObject) => {

            dispatch(setNewProduct(productObject))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

