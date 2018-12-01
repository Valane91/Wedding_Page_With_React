import React from 'react'; 

import BarIcon from '../../../Shared/Icons/BarIcon'; 
import CloseIcon from '../../../Shared/Icons/CloseIcon'; 

const computeClassName = (isMenuOpen) => {
    
    if(isMenuOpen) {
        return 'menuToggle opened';
    } 

    return 'menuToggle';

}

const MenuToggle = (props) => {

    const className = computeClassName(props.isMenuOpen);

    return(
        <p className={className} onClick={() => props.handleMenuToggle()}>
            <BarIcon />
            <CloseIcon />
        </p>
    );

}

export default MenuToggle; 