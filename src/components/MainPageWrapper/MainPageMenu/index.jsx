import React, { Fragment } from 'react'; 

import MenuToggle from './MenuToggle'; 
import WeddingMenu from '../../Shared/WeddingMenu'; 


const computeNavClassName = (isMenuOpen) => {

    if(isMenuOpen) {
        return 'opened';
    } 

    return ''; 
}

const MainPageMenu = (props) => {

    const className = computeNavClassName(props.isMenuOpen);

    return(
        <Fragment>

            <MenuToggle 
                handleMenuToggle = {() => props.handleMenuToggle()}
                isMenuOpen={props.isMenuOpen}
            />
            
            <nav className={className}>
                <WeddingMenu
                    menuLinks={props.menuLinks}
                    handleMenuItemClick={
                        (menuItemIndex) => props.handleMenuItemClick(menuItemIndex)
                    }          
                />
            </nav>
        
        </Fragment>
    );

}

export default MainPageMenu; 