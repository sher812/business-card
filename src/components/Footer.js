import React from 'react';
import fb from "../images/fb-icon.svg";
import gh from "../images/gh-icon.svg";
import insta from "../images/insta-icon.svg";
import twt from "../images/twt-icon.svg";

function Footer() {
    return(
        <footer className="footer-section">
            <a href="https://www.facebook.com/">
                <img src={fb} className="footer-icon" alt="fb-icon"/>
            </a>
            <a href="https://github.com/sher812"> 
                <img src={gh} className="footer-icon" alt="gh-icon"/>
            </a>
            <a href="https://www.instagram.com/blueegreene/">
                <img src={insta} className="footer-icon" alt="insta-icon"/>
            </a>
            <a href="https://twitter.com/?lang=en">
                <img src={twt} className="footer-icon" alt="twt-icon"/>
            </a>
        </footer>
    );
}

export default Footer;