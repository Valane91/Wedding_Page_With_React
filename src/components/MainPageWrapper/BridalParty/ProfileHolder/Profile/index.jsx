import React from 'react'; 


const Profile = (props) => {

    return(
        <div className="width50">
            <img className="profileImage" src={props.src} alt={props.alt} />
            <h3>{props.name}</h3>
            <p><b>{props.role}</b>{props.description}</p>
        </div>
    );

}

export default Profile; 