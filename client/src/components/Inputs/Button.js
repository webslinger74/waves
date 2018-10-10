import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';

const MyButton = (props,{
    type,
    title,
    linkTo,
    addStyles

}) => {
        
    
    const buttons = () => {
        let template = '';

        switch(props.type){
            case "default":
                template = <Link className="link_default"
                to={props.linkTo}
                {...props.addStyles}
                >{props.title}</Link>
            break;
            case "submit":
                template = <input value={props.title} className="link_default" type="submit"/>
            break;
            case "add_to_cart_link":
                template = <div className="add_to_cart_link"
                                onClick={() => {
                                    props.runAction()}}
                >
                    <FontAwesomeIcon 
                        icon={faShoppingBag}
                    /> 
                    Add To Cart
                </div>
            break;
            default:
                template = '';
        }



        return template;
    }

    return (
        <div className="my_link">
            {buttons()}
        </div>

    )
}
 






export default MyButton;

