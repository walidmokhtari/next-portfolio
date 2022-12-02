import React from "react";
import Styles from './footer.module.scss'
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

const Footer = (props) => {
    
    return (
        <div className={Styles.footer}>
            <div onClick={() => window.location.assign('https://www.linkedin.com/in/walidmokhtari/')} className={Styles.footer__svg}>
                <FaLinkedin />
            </div>
            <div onClick={() => window.location.assign('https://github.com/walidmokhtari')} className={Styles.footer__svg}>
                <FaGithub />
            </div>
            <div onClick={() => window.location.assign('https://gitlab.com/walidmokhtari')} className={Styles.footer__svg}>
                <FaGitlab />
            </div>
        </div>
    )
}

export default Footer