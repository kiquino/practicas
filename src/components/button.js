import React from "react";
const Button = (props)=>{
    return(
        // CANCEL - PRIMARY - SECONDARY
        <button className={props.type}>{props.text}</button>
    )
}
export default Button;