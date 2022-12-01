import React, {useState, useEffect} from "react";
import Styles from "./header.module.scss"
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Header = (props) => {
    const [link, setLink] = useState("Hello")
    
    useEffect(() => {

    },[link] )

    return (
        <div className={Styles.header}>
            <div className={Styles.header__logo}>
                <div className={Styles.header__logo__fn}>
                    <h1>W.</h1>
                </div>
                <div className={Styles.header__logo__ln}>
                    <h1>Mokhtari</h1>
                </div>
            </div>
            <div className={Styles.header__links}>
                <div>
                    <p className={link === "Hello" ? Styles.header__links__effect : ""} onClick={() => setLink("Hello")}>Hello</p>
                </div>
                <div>
                    <p className={link === "Projets" ? Styles.header__links__effect : ""} onClick={() => setLink("Projets")}>Projets</p>
                </div>
                <div>
                    <p className={link === "Parcours" ? Styles.header__links__effect : ""} onClick={() => setLink("Parcours")}>Parcours</p>
                </div>
                <div>
                    <p className={link === "Work" ? Styles.header__links__effect : ""} onClick={() => setLink("Work")}>Services</p>
                </div>
            </div>
            <div className={Styles.header__sm}>
                <div className={Styles.header__sm__svg}>
                    <FaLinkedin />
                </div>
                <div className={Styles.header__sm__svg}>
                    <FaGithub />
                </div>
                <div className={Styles.header__sm__svg}>
                    <FaGitlab />
                </div>
                <div>
                    <button type="submit" value="Contact">Contact</button>
                </div>
                <div className={Styles.header__sm__menu}>
                    <FiMenu onClick={() => setMenuClicked(true)}/> 
                </div>
            </div>
        </div>
    )
}

export default Header