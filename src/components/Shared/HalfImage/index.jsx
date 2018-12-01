import React from 'react'; 

import Info from './Info';


const HalfImage = (props) => {

    return(
        <div className="halfImage">

            <img
                src={props.image.src}
                alt={props.image.alt}
            />

            <Info
                address={props.address}
                phone={props.phone}
                website={props.website}
                googleMap={props.googleMap}
            />

        </div>
    );

}

export default HalfImage; 