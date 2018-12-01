import React from 'react'; 

const WeddingLogo = (props) => {

    return(
        <div className="leftHalf">
            <img 
                className="weddingLogo"
                src={props.src}
                alt={props.alt}
            />
        </div>
    );

}

export default WeddingLogo; 