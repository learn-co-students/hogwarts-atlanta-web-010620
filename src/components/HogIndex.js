import React from 'react'
import HogCard from './HogCard'

class HogIndex extends React.Component{
    render() {
        return(
            <div className="ui grid container link cards">
                {this.props.hogs.map(hog => {
                    return <HogCard hog={hog} key={hog.name}/>
                })}
            </div>
        )
    }
}

export default HogIndex