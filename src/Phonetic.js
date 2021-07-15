import React from "react";
import "./Phonetic.css"

export default function Phonetic (props) {
   
    return (
        <div className="Phonetic">
            <span>
                {props.phonetic.text}
            </span>
        
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Click here to listen
            </a>
            
        </div>
    )
}