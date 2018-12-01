import React from 'react'; 

import MapMarkerIcon from '../../../Icons/MapMarkerIcon';


const WebsiteLink = (props) => {

    return(
        <p>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <MapMarkerIcon />
                {props.name}
            </a>
        </p>
    );

}

export default WebsiteLink; 