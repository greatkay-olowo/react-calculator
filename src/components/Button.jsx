import React from 'react';
import './Button.css';

const isOperator = e => {
    return !isNaN(e) || e === '.' || e === '=';
}

const Button = (props) => {
    return (
        <div
            className={`button-wrapper ${
                isOperator(props.children) ? null : 'operator'
                }`}
            onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>


    );
};

export default Button;