import React from 'react'; 

import WeddingMenu from '../../../Shared/WeddingMenu';
import MenuFooter from './MenuFooter';


const HomepageMenu = (props) => {

    return(
        <div className="buttons">
            <WeddingMenu
                menuLinks={props.menuLinks}
                
                handleMenuItemClick={
                    (menuItemIndex) => props.handleMenuItemClick(menuItemIndex)
                }

            />
            <MenuFooter
                content={props.menuFooter}
            />

        </div>
    );

}

export default HomepageMenu;