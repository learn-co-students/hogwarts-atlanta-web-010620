import React from 'react' 

export default class HogDetails extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.specialty}</p>
                <p>{this.props.heighest_medal_achieved}</p>
                <p>{this.props.weight}</p>
            </div>
        )
    }

}