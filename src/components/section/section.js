import React from "react";
import Styles from './section.module.scss'

const Section = (props) => {

    return (
        <div className={Styles.section}>
            <div className={Styles.section__title}>
                <h1>{props.title}</h1>
            </div>
            <div className={Styles.section__cards}>

            </div>
        </div>
    )
}

export default Section