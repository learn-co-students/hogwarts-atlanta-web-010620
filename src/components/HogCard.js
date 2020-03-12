import React from 'react';
import HogDetails from './HogDetails';

class HogCard extends React.Component{

    state = {
        selected: false,
    }


    handleClick = () => {
        this.setState({
            selected: !this.state.selected,
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
        console.log(this.state)
        return (
        <div className="ui eight wide column" onClick={this.handleClick}>
            <h2>{this.props.hog.name}</h2>
            <img src={this.getImage(this.props.hog.name)} alt={this.props.hog.name}/>
            {this.state.selected ? <HogDetails hog={this.props.hog} /> : null}
        </div>
        )
    }
}

export default HogCard

