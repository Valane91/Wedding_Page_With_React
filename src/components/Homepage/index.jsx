import React from 'react'; 

import WeddingLogo from './WeddingLogo';
import WeddingInfo from './WeddingInfo'; 

const computeClassName = (isHomepageOpen) => {

    if(isHomepageOpen) {
        return 'homepage';
    } else {
        return 'homepage homeOpened';
    }
}

const Homepage = (props) => {

    const className = computeClassName(props.isHomepageOpen);

    return(
        <div className={className}>
            <WeddingLogo 
                src={props.weddingLogo.src}
                alt={props.weddingLogo.alt}
            />

            <WeddingInfo 
                weddingTitle={props.weddingTitle}
                dateInfo={props.dateInfo}
                
                menuLinks={props.menuLinks}
                handleMenuItemClick={
                    (menuItemIndex) => props.handleMenuItemClick(menuItemIndex)
                }
                
                menuFooter={props.menuFooter}
                address={props.address}
            />

        </div>
    );

}

export default Homepage; 