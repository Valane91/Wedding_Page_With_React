import React from 'react'; 


const computeClassName = (classes) => {

    const className = classes.join(' '); 
    return className;

}


const MenuLink = (props) => {
    
    const className = computeClassName(props.classes); 

    return(
        <a href={props.href} className={className} onClick={() => props.onClick()} >
            {props.content}
        </a>
    ); 

}

export default MenuLink; 