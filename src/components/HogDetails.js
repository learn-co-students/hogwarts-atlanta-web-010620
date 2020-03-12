import React from 'react';

const HogDetails = (props) => (
    <div>
        <p>This hog's specialty is {props.hog.specialty}</p>
        <p>This hog weighs {props.hog.weight} pounds</p>
        <p>Greased: {props.hog.greased ? 'Yup' : 'Nope'}</p>
        <p>Highest medal: {props.hog['highest medal achieved']}</p>
    </div>
)

export default HogDetails

