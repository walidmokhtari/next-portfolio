import React from "react";
import Styles from './service.module.scss'
import {BiCodeAlt} from 'react-icons/bi'
import {DiDatabase} from 'react-icons/di'

const Service = (props) => {
    
    return (
        <div className={Styles.service}>
            <h1>{props.title}</h1>
            {
                props.type === "code" ?
                    <BiCodeAlt />
                :
                    <DiDatabase />
            }
            <p>{props.description}</p>
        </div>
    )
}

export default Service