import React from 'react'; 

import AddressInfo from './AddressInfo'; 
import PhoneLink from './PhoneLink';
import WebsiteLink from './WebsiteLink'; 
import GoogleMapLink from './GoogleMapLink'; 


const Info = (props) => {

    return(
        <div className="info">
            <h3>{props.title}</h3>
            
            <AddressInfo
                street={props.address.street}
                city={props.address.city}
            />

            <PhoneLink
                href={props.phone.href}
                number={props.phone.number}
            />

            <WebsiteLink
                href={props.website.href}
                name={props.website.name}
            />

            <GoogleMapLink
                href={props.googleMap.href}
                message={props.googleMap.message}
            />

        </div>
    );

}

export default Info; 