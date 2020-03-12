import React, { Component } from 'react';

export default class SortButton extends Component {
    render(){
        return(
            <button
            onClick={this.props.changeFunction}
            
            >{this.props.title}</button>
        )
    }
}

