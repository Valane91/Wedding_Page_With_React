import React from 'react'; 

import HalfImage from '../../Shared/HalfImage';


const Venu = (props) => {

    return(
        <div className="section" id="venu">
            <div className="contentArea">
                
                <h2>Venu</h2>


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

export default Venu; 