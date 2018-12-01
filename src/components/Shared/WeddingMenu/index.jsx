import React, { Fragment } from 'react'; 

import MenuLink from './MenuLink';
import MenuLinkWithIcon from './MenuLinkWithIcon';


const WeddingMenu = (props) => {

    return(
        <Fragment>
            {
                props
                    .menuLinks
                    .map((menuLink, index) => 
                        {

                            if(menuLink.hasIcon) {

                                return(
                                    <MenuLinkWithIcon 
                                        key={`menuLink_${index}`}
                        
                                        onClick={
                                            () => props.handleMenuItemClick(index)
                                        }
                        
                                        href={menuLink.href}
                                        classes={menuLink.classes}
                                        content={menuLink.content}
                                    />
                                ); 
                        
                            } else {
                        
                                return(
                                    <MenuLink 
                                        key={`menuLink_${index}`}
                        
                                        onClick={
                                            () => props.handleMenuItemClick(index)
                                        }
                        
                                        href={menuLink.href}
                                        classes={menuLink.classes}
                                        content={menuLink.content}
                                    />
                                );   
                                  
                            }

                        }
                    )
            }
        </Fragment>
    );

}


export default WeddingMenu; 