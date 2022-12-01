import React from "react";
import Styles from './project.module.scss'

const Project = (props) => {

    return (
        <div className={Styles.project}>
            <div className={Styles.project__title}>
                <h1>{props.title}</h1>
            </div>
            <div className={Styles.section__cards}>
                <div className={Styles.section__cards__top}></div>
                <div className={Styles.section__cards__bottom}></div>
            </div>
        </div>
    )
}

export default Project