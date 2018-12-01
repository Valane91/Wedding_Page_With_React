import React from 'react'; 

import WeddingDateInfo from './WeddingDateInfo'; 
import WeddingTimer from './WeddingTimer'; 


const CountDownWrapper = (props) => {

    return(
        <div id="countDownWrapper">
        
            <WeddingDateInfo
                date={props.weddingDate}
            />

            <WeddingTimer
                countDown={props.countDown}
            />

        </div>
    );

}

export default CountDownWrapper;