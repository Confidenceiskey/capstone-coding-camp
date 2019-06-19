import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.background || "white"};
    textColor: ${props => props.textColor || "white"};
    

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;



const Button = (props) => {
    return (
        <StyledButton background={props.background} textColor={props.textColor}>{props.text}</StyledButton>
    )
}

export default Button;