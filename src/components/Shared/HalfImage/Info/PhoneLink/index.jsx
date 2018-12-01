import React from 'react'; 

import PhoneIcon from '../../../Icons/PhoneIcon';


const PhoneLink = (props) => {

    return(
        <p>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <PhoneIcon />
                {props.number}
            </a>
        </p>
    );

}

export default PhoneLink; 