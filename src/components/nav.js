import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libStatus,setLibStatus})=>{

    return(
        <nav>
            <h1> waves</h1>
            <button onClick={()=>{setLibStatus(!libStatus)}}>
                library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;