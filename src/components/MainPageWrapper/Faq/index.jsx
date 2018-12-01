import React from 'react'; 

import AnsweredQuestion from './AnsweredQuestion';


const Faq = (props) => {

    return(
        <div className="section" id="faq">
            <div className="contentArea">
                {
                    props
                        .answeredQuestions
                        .map((answeredQuestion, index) =>
                            {
                                return(
                                    <AnsweredQuestion
                                        key={`answeredQuestion_${index}`}

                                        question={answeredQuestion.question}
                                        answer={answeredQuestion.answer}
                                    />
                                );
                            }
                        )

                }
            </div>
        </div>
    );

}

export default Faq; 