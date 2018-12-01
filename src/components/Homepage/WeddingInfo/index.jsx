import React from 'react'; 

import WeddingTitle from '../../Shared/WeddingTitle';
import CountDownWrapper from './CountDownWrapper'; 
import WeddingAddress from './WeddingAddress'; 
import HomepageMenu from './HomepageMenu';


const WeddingInfo = (props) => {

    return(
        <div className="rightHalf">
            <div className="contentHalfWrap">
            
                <WeddingTitle
                    leftPart={props.weddingTitle.leftPart}
                    middlePart={props.weddingTitle.middlePart}
                    rightPart={props.weddingTitle.rightPart}
                />

                <CountDownWrapper
                    weddingDate={props.dateInfo.weddingDate}
                    countDown={props.dateInfo.countDown}
                />

                <HomepageMenu
                    menuLinks={props.menuLinks}

                    handleMenuItemClick={
                        (menuItemIndex) => props.handleMenuItemClick(menuItemIndex)
                    }

                    menuFooter={props.menuFooter}
                />

                <WeddingAddress 
                    name={props.address.name}
                    href={props.address.href}
                    street={props.address.address}
                    city={props.address.city}
                />
            
            </div>
        </div>
    ); 

} 

export default WeddingInfo; 