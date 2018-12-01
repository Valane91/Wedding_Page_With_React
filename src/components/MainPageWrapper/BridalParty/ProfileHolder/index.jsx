import React from 'react'; 

import Profile from './Profile'; 


const ProfileHolder = (props) => {

    return(
        <div className="profileHolder">
            {
                props
                    .profiles
                    .map((profile, index) => 
                        {
                            return(
                                <Profile
                                    key={`profile_${index}`}

                                    name={profile.name}
                                    src={profile.image.src}
                                    alt={profile.image.alt}

                                    role={profile.role}
                                    description={profile.description}
                                />
                            );
                        }
                    )
            }
        </div>
    );

}

export default ProfileHolder; 