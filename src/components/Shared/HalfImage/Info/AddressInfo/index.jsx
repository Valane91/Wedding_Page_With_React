import React from 'react'; 


const AddressInfo = (props) => {

    return(
        <p>{props.street}<br />{props.city}</p>
    )

}

export default AddressInfo; 