import React from 'react';
import './Contact.css';
import { contactInfo } from '../../portfolio';
import Social from '../Social/Social';

function Contact() {
    const Fade: any = require('react-reveal/Fade');
    return (
        <Fade bottom duration={800}>
        <section className="section--contact" id="contact">

            <div className="contact-title">
                <p>{contactInfo.title}</p>
            </div>
            <div className="inner">
                
                <div className="profile-img">
                    <img src={require("../../assets/taeung-profile.jpg")} alt="profile" />
                </div>
                <div className="wrapper-inner">
                    <div className="contact-introduce">
                        <ul>
                            <li>PHONE : 010.3042.733</li>
                            <li>E-MAIL : yksr7948@naver.com</li>
                            <li><a href="https://github.com/yksr7948">GITHUB : https://github.com/yksr7948</a></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <Social />
                    </div>
                </div>
                
            </div>
        </section>
        </Fade>
    );
}
export default Contact;