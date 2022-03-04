import React from "react";
import Button from "../components/button";
import Mesas from "../components/mesas";
const Init = () => {
    return (
        <div className="init">
            <img src="logo.png" alt=""/>
            <Button type="primary" text="nueva mesa +" />
            <hr/>
        <Mesas />
        </div>
    )
}
export default Init;