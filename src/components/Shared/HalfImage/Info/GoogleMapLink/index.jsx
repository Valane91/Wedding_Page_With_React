import React from 'react'; 

import GlobeIcon from '../../../Icons/GlobeIcon';


const GoogleMapLink = (props) => {

    return(
        <p>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <GlobeIcon />
                {props.message}
            </a>
        </p>
    );

}

export default GoogleMapLink; 