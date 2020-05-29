import React from 'react';

const Button = (props) => {
    return (
        <div onClick={() => props.handleClick(props.dog.id, props.dog.isGoodDog)}>
            <button> {props.dogStatus()} </button>
        </div>
    );
}

export default Button;
