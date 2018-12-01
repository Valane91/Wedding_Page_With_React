import React, { Fragment } from 'react'; 

import ArrowUpIcon from '../../Shared/Icons/ArrowUpIcon';


const Footer = (props) => {

    return(
        <Fragment>
            
            <a href="#topOfPage" className="toTop">
                <ArrowUpIcon />
                <br />
                To Top
            </a>

            <footer>
                {props.footerContent}
            </footer>
        </Fragment>
    );

}

export default Footer; 