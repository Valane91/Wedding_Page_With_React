import React from 'react'; 

import TimeHolder from './TimeHolder'; 


const WeddingTimer = (props) => {

    return(
        <div id="countdownTimer">
            {
                props
                    .countDown
                    .map((timeUnit, index) =>
                        {
                            return(
                                <TimeHolder
                                    key={`timeHolder_${index}`}

                                    value={timeUnit.value}
                                    unit={timeUnit.unit} 
                                />
                            );
                        }
                    )
            }
        </div>
    ); 

}

export default WeddingTimer; 