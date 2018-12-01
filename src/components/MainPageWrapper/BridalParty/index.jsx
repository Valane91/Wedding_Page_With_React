import React from 'react'; 

import BridalPartyHeader from './BridalPartyHeader';
import ProfileHolder from './ProfileHolder';


const BridalParty = (props) => {

    return(
        <div className="section" id="bridalParty">
            <div className="contentArea">

                <BridalPartyHeader 
                    title={props.title}
                    description={props.description}
                />

                {
                    props
                        .profileHolders
                        .map((profileHolder, index) =>
                            {

                                return(
                                    <ProfileHolder 
                                        key={`profileHolder_${index}`}

                                        profiles={profileHolder}
                                    />
                                );

                            }
                        )
                }

            </div>
        </div>
    );

}

export default BridalParty; 