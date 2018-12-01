import React, { Fragment } from 'react';



const WeddingAddress = (props) => {

    return(

        <Fragment>

            <h1>{props.name}</h1>
            <h2>
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    {props.street}
                    <br />
                    {props.city}
                </a>
            </h2>
        
        </Fragment>

    );

}

export default WeddingAddress; 