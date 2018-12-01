import React from 'react'; 


const computeClassName = (classes) => {

    const className = classes.join(' '); 
    return className;

}


const MenuLinkWithIcon = (props) => {
    
    const className = computeClassName(props.classes); 

    return(
        <a href={props.href} className={className} onClick={() => props.onClick()} >
            {props.content}
            <i className="fa fa-external-link" aria-hidden="true"></i>
        </a>
    ); 

}

export default MenuLinkWithIcon; 