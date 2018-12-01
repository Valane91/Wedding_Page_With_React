import React from 'react'; 

import HalfImage from '../../Shared/HalfImage';


const Accomodations = (props) => {

    return(
        <div className="section" id="accomodations">
            <div className="contentArea">
                
                <h2>Accomodations</h2>
                <p>{props.message}</p>

                <HalfImage
                    title={props.halfImageTitle}

                    image={props.image}
                    address={props.address}
                    phone={props.phone}
                    website={props.website}
                    googleMap={props.googleMap}
                />
            
            </div>
        </div>
    );

}

export default Accomodations; 