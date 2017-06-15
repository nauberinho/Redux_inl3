/**
 * Created by naube on 2017-06-15.
 */

import React, { Component } from 'react';

export default class History extends Component {

    render(){

        let actions = this.props.historyState.actions.map((action) => {

                return(
                    <li className="history-action">{action}</li>
                )
            })







        return(


            <div className="history-container">

            <ul>
                {actions}
            </ul>


            </div>
        )
    }


}
