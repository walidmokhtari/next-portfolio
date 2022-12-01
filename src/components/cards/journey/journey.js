import React from "react";
import Styles from './journey.module.scss'

const Journey  = (props) => {
    
    return (
        <div className={Styles.service}>
            <h1>{props.diploma}</h1>
            <p>{props.year}</p>
            <p>{props.school}</p>
        </div>
    )
}

export default Journey