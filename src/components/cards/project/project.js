import React from "react";
import Styles from './project.module.scss'
import CardBg from '../../../../public/card_bg.jpg'
import Link from "next/link";

const Project = (props) => {
    
    return (
        <div className={Styles.cards}>
            <div className={Styles.cards__top}>
                <img src={CardBg.src}></img>
                <h1>{props.title}</h1>
            </div>
            <div className={Styles.cards__bottom}>
                <h1>Description</h1>
                <p>{props.description}</p>
            </div>
            <Link href={props.link ? props.link : ""} >Voir le projet</Link>
        </div>
    )
}

export default Project