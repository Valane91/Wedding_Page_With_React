import React from 'react'; 


const TimeHolder = (props) => {

    return(
        <div className="timeHolder">
            <p>{props.value}</p>
            <h2>{props.unit}</h2>
        </div>
    );

}

export default TimeHolder; 