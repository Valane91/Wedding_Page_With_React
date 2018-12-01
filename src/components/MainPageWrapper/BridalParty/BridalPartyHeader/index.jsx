import React, { Fragment } from 'react'; 


const BridalPartyHeader = (props) => {

    return(
        <Fragment>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </Fragment>
    );

}

export default BridalPartyHeader; 