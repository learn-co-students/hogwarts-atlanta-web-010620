import React from 'react';
import HogDetails from './HogDetails';

class HogCard extends React.Component{

    state = {
        selected: false,
        hidden: false,
    }


    handleClick = () => {
        this.setState({
            selected: !this.state.selected,
        })
    }

    handleHideButton = () => {
        this.setState({
            hidden: !this.state.hidden,
        })
    }

    getImage = hogName => {
        let formattedName = hogName
        .split(" ")
        .join("_")
        .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };
    
    render() {
        return (
        <div className="ui five wide column card"  onClick={this.handleClick}>
            <div style={{display: (this.state.hidden ? 'none' : 'block') }}>
                <h2>{this.props.hog.name}</h2>
                <img src={this.getImage(this.props.hog.name)} alt={this.props.hog.name}/>
                {this.state.selected ? <HogDetails hog={this.props.hog} /> : null}
            </div>
            <button className="ui secondary button" onClick={this.handleHideButton}>{this.state.hidden ? 'Unhide Hog' : 'Hide Hog'}</button>
        </div>
        )
    }
}

export default HogCard

