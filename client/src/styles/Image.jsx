import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    src: url(${props => props.src});
    position: ${props => props.position};
    margin: ${props => props.margin || "1%"};
    margin-left: ${props => props.marginLeft};
    top: ${props => props.top};
    left: ${props => props.left};
    border: ${props => props.border};

    @media (max-width: 1292px) {
        position: ${props => props.mobilePos};
        top: ${props => props.mobileTop};
    }
`;


const Image = (props) => {
    return (
        <StyledImg 
            height={props.height} 
            width={props.width}
            max-width={props.maxWidth} 
            src={props.src} 
            margin={props.margin}
            margin-left={props.marginLeft}
            float={props.float} 
            position={props.position}
            top={props.top}
            left={props.left}
            mobilePos={props.mobilePos}
            mobileTop={props.mobileTop}    
        />
    );
}

export default Image;