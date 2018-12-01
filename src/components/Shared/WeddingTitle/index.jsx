import React from 'react'; 


const WeddingTitle = (props) => {

    return(
        <h1 className="big">
            {props.leftPart}
            <span>{props.middlePart}</span>
            {props.rightPart}
        </h1>
    ); 

}

export default WeddingTitle; 