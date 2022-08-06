import React from 'react';
import mail from "../images/Mail.svg";
import vector from "../images/Vector.svg";

function Name() {
    return(
        <div className="name-section">
            <h1> Seong Her </h1>
            <h2> Software Developer </h2>
            <p> seong.june.her.99@gmail.com </p>

            <span className="contact-btns">
                <a href="mailto: seong.june.her.99@gmail.com">
                    <button className='email-btn'> <img src={mail} alt="mail-logo"/> Email </button>
                </a>
                <a href="https://www.linkedin.com/in/seong-june-her/">
                    <button className='linkedin-btn'> <img src={vector} alt="vector-logo"/> LinkedIn </button>
                </a>
            </span>
        </div>
    )
}

export default Name;
