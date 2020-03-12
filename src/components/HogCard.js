import React from 'react'
import Images from '../hog-imgs/augustus_gloop.jpg'
import HogDetails from "./HogDetails"

export default class HogCard extends React.Component{
    state = {
        selected:false
    }
    showInfo = () =>{
        this.setState({
            selected:true
        })
    }        
    render(){
        return (
            <div
            className="ui eight wide column"
            >
                <p>{this.props.hog.name}</p>
                {/* <img src={`../hog-imgs/${props.imageName(props.hog.name)}`}></img> */}
                <img 
                    src={Images}
                    onClick={this.showInfo}
                    >
                </img>
                    {this.state.selected===true ? <HogDetails 
                    specialty={this.props.hog.specialty} 
                    greased = {this.props.hog.greased}
                    weight={this.props.hog.weight}
                    heighest_medal_achieved={this.props.hog["highest medal achieved"]}
                    /> : null}
            </div>
        )
    }
}
