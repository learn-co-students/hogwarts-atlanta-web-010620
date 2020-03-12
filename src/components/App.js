import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogIndex from "./HogIndex";

class App extends Component {
  
  state = {
    filtered: false,
    sortName: false,
    sortWeight: false,
    hogs: [],
    hogList: [],
  }

  componentDidMount(){
    this.setState({
      hogs: hogs,
      hogList: hogs.slice(),
    })
  }

  handleButton = () => {
    if (this.state.filtered) {
      this.setState({
        filtered: !this.state.filtered,
        hogList: (this.state.sortName ? this.sortByName(this.state.hogs) : this.state.sortWeight ? this.sortByWeight(this.state.hogs) : this.state.hogs.slice()),
      })
    } else {
    this.setState({
      filtered: !this.state.filtered,
      hogList: this.state.hogList.filter(hog => hog.greased)
    })
    }
  }

  handleNameButton = () => {
    if (this.state.sortName) {
      this.setState({
        sortName: false,
        sortWeight: false,
        hogList: (this.state.filtered ? this.state.hogs.filter(hog => hog.greased) : this.state.hogs.slice())
      })
    } else {
      this.setState({
        sortName: true,
        sortWeight: false,
        hogList: this.sortByName(this.state.hogList)
      })
    }
  }

  handleWeightButton = () => {
    if (this.state.sortWeight) {
      this.setState({
        sortName: false,
        sortWeight: !this.state.sortWeight,
        hogList: (this.state.filtered ? this.state.hogs.filter(hog => hog.greased) : this.state.hogs.slice())
      })
    } else {
      this.setState({
        sortName: false,
        sortWeight: !this.state.sortWeight,
        hogList: this.sortByWeight(this.state.hogList)
      })
    }
  }

  sortByName(hogs) {
    return hogs.slice().sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  } 

  sortByWeight(hogs) {
    return hogs.slice().sort((a,b) => (a.weight < b.weight) ? 1 : ((b.weight < a.weight) ? -1 : 0));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleButton}>{this.state.filtered ? 'Unfilter Greased Pigs' : 'Filter Greased Pigs'}</button>
        <button onClick={this.handleNameButton}>Sort By Name</button>
        <button onClick={this.handleWeightButton}>Sort By Weight</button>
        <Nav />
        <HogIndex hogs={this.state.hogList} />
      </div>
    );
  }
}

export default App;
