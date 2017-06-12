import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from './Form';
import Products from './Products';
import {connect} from 'react-redux';
import Main from './Main.js';
import {
    setName,
    setPrice,
    pushToDatabase
} from '../actions/formActions.js';
import
    updateProductsState

 from '../actions/productsActions.js';
import * as firebase from 'firebase';
import config from '../firebase';
firebase.initializeApp(config);

class App extends Component {
    changeUserName(newName) {

    }
  render() {
    return (
      <div className="container">

          <Form formState={this.props.form} setName={this.props.setName} setPrice={this.props.setPrice} pushToDatabase={this.props.pushToDatabase}/>
          <Products updateProductsState={this.props.updateProductsState} productsState={this.props.productsState}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        form: state.form,
        productsState: state.product

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

        pushToDatabase: (productObject) => {

            dispatch(pushToDatabase(productObject))
        },

        updateProductsState: () => {

            dispatch(updateProductsState())
        }

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

