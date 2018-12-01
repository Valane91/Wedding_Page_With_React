import React from 'react'; 

import PlusCircleIcon from '../../../Shared/Icons/PlusCircleIcon';
import MinusCircleIcon from '../../../Shared/Icons/MinusCircleIcon';



const AnsweredQuestion = (props) => {

    return(
        <div className="accordian">
            
            <p className="trigger">
                {props.question}

                <PlusCircleIcon />
                <MinusCircleIcon /> 

            </p>

            <p className="expandable">
                {props.answer}
            </p>
        
        </div>
        
    );

}

export default AnsweredQuestion; 