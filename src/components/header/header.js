import React, {useState, useEffect} from "react";
import Styles from "./header.module.scss"
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import Link from "next/link";

const Header = (props) => {
    const [link, setLink] = useState("Hello")
    const [headerBg, setHeaderBg] = useState(false)

    const transitionNav  = () => {

        if (window.scrollY >= 500) {
            setHeaderBg(true)
        } else {
            setHeaderBg(false);
        }


        if (window.scrollY < 500) {
            setLink("Hello")
        } else if (window.scrollY >= 500 && window.scrollY <= 1200) {
            setLink('Projets')
        } else if (window.scrollY >= 1200 && window.scrollY <= 1700) {
            setLink('Work')
        } else if (window.scrollY >= 1700 && window.scrollY <= 2200) {
            setLink('Parcours')
        }
    };

    if (process.browser) {
        document.addEventListener("scroll", transitionNav);
    }
    
    useEffect(() => {

    },[link] )

    return (
        <div className={`${Styles.header} ${headerBg && Styles.header__bg}`}>
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
                    <Link href="" className={link === "Hello" ? Styles.header__links__effect : ""} onClick={() => setLink("Hello")}>Hello</Link>
                </div>
                <div>
                    <Link href="#projets" scroll={false} className={link === "Projets" ? Styles.header__links__effect : ""} onClick={() => setLink("Projets")}>Projets</Link>
                </div>
                <div>
                    <Link href="#services" scroll={false} className={link === "Work" ? Styles.header__links__effect : ""} onClick={() => setLink("Work")}>Services</Link>
                </div>
                <div>
                    <Link href="#parcours" scroll={false} className={link === "Parcours" ? Styles.header__links__effect : ""} onClick={() => setLink("Parcours")}>Parcours</Link>
                </div>
            </div>
            <div className={Styles.header__sm}>
                <div onClick={() => window.location.assign('https://www.linkedin.com/in/walidmokhtari/')} className={`${Styles.header__sm__svg} ${headerBg && Styles.color__green}`}>
                    <FaLinkedin />
                </div>
                <div onClick={() => window.location.assign('https://github.com/walidmokhtari')} className={`${Styles.header__sm__svg} ${headerBg && Styles.color__green}`}>
                    <FaGithub />
                </div>
                <div onClick={() => window.location.assign('https://gitlab.com/walidmokhtari')} className={`${Styles.header__sm__svg} ${headerBg && Styles.color__green}`}>
                    <FaGitlab />
                </div>
                <div>
                    <form action="mailto:mokhtariwalid@hotmail.com">
                        <button type="submit" value="Contact" className={`${headerBg && Styles.bg__green}`}>Contact</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header