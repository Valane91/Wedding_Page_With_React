import React from 'react'; 

import MenuLink from './MenuLink';
import MenuLinkWithIcon from './MenuLinkWithIcon';

const MenuLinkFactory = 
            (
                keyIndex
                , hasIcon
                , href
                , classes
                , content
                , handleMenuItemClick
            ) => 
{
    
    if(hasIcon) {

        return(
            <MenuLinkWithIcon 
                key={`menuLink_${keyIndex}`}

                onClick={
                    () => handleMenuItemClick(keyIndex)
                }

                href={href}
                classes={classes}
                content={content}
            />
        ); 

    } else {

        return(
            <MenuLink 
                key={`menuLink_${keyIndex}`}

                onClick={
                    () => handleMenuItemClick(keyIndex)
                }

                href={href}
                classes={classes}
                content={content}
            />
        );   
          
    }

}

export default MenuLinkFactory; 