import React, { Component } from 'react';

const PersonCard = props => {
    return(
        <div className="mx-auto w-50 mt-5">
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
    )
}

export default PersonCard;