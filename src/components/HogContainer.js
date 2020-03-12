import React, { Component } from "react";
import HogCard from './HogCard'
import SortButton from './SortButton'
export default class App extends Component {

    state={
        hogs:this.props.hogs,
        showGreased:false,
        sortWeight: false, 
        sortName: false
    }

    changeShowGreased = () =>{
        let tempHogs = [...this.props.hogs];
        // this.state.showGreased === true ? this.setState({showGreased:false}) : this.setState({showGreased:true})
        if (!this.state.showGreased){
            this.setState({
                hogs: tempHogs.filter((hog) => hog.greased === true),
                showGreased:true,
                sortWeight: false, 
                sortName: false
            })
        }else{
            this.setState({
                hogs: this.props.hogs,
                showGreased:false,
                sortWeight: false, 
                sortName: false
            })
        }
    }

    changeFilterWeight = () =>{
        let tempHogs = [...this.props.hogs];
        if (!this.state.sortWeight){
            this.setState({
                hogs: tempHogs.sort((a, b) => (a.weight < b.weight) ? 1 : -1),
                showGreased:false,
                sortWeight: true, 
                sortName: false
            })
        }else{
            this.setState({
                hogs: this.props.hogs,
                showGreased:false,
                sortWeight: false, 
                sortName: false
            })
        }
    }

    changeFilterName = () =>{
        let tempHogs = [...this.props.hogs];
        debugger
        if (!this.state.sortName){
            this.setState({
                hogs: tempHogs.sort((a, b) => (a.name > b.name) ? 1 : -1),
                showGreased:false,
                sortWeight: false, 
                sortName: true
            })
        }else{
            this.setState({
                hogs: this.props.hogs,
                showGreased:false,
                sortWeight: false, 
                sortName: false
            })
        }
    }

    imageName = (name) => {
        return `${name.replace(" ","_")}.jpg`.toLowerCase();
    }

    filterForGreased = () => {
        if (this.state.showGreased){
            return this.props.hogs.filter((hog) =>  hog.greased === true)
        }
        return this.props.hogs
    }
    
    makeHogCards = () => {
        const hogs = this.state.hogs;
        console.log('this is makeHogCards hogs ')
        console.log(hogs)    
        return hogs.map((hog) => 
            <HogCard 
            className="ui link cards"
            key={hog.name}
            hog={hog} 
            imageName={this.imageName}
            showDetails={this.showDetails}
            />
        )}

    render(){
        return( 
            <div
            className="ui grid container"
            >
                {<SortButton 
                    changeFunction={this.changeShowGreased}
                    title={'toggle greased'}
                />}

                {<SortButton 
                    changeFunction={this.changeFilterWeight}
                    title={'sort by weight'}
                />}

                {<SortButton 
                    changeFunction={this.changeFilterName}
                    title={'sort by name'}
                />}

                {this.makeHogCards()}
            </div>
        )
    }
}