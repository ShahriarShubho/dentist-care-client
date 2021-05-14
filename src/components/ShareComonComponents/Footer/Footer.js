import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="row text-secondary mt-5 m-4">
                <div className="col-md-3">
                    <p className="mt-5">exsilent work</p>
                    <p>exsilent work</p>
                    <p>exsilent work</p>
                    <p>check out</p>
                </div>
                <div className="col-md-3">
                    <h6 className="text-info">Services</h6>
                    <p>exsilent work</p>
                    <p>exsilent work</p>
                    <p>exsilent work</p>
                    <p>check out</p>
                    <p>check out</p>
                    <p>check out</p>
                </div>
                <div className="col-md-3">
                <h6 className="text-info">Our Health</h6>
                    <p>exsilent work</p>
                    <p>exsilent work</p>
                    <p>exsilent work</p>
                    <p>check out</p>
                    <p>check out</p>
                    <p>check out</p>
                </div>
                <div className="col-md-3">
                <h6 className="text-info">Our Address</h6>
                    <p>New York 1000 street road, USA</p>
                    <div>
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                    </div>
                    <p className="mt-5">Call Now</p>
                    <strong className="bg-info text-white p-2">+8801817510325</strong>
                </div>
            </div>
            <p className="text-center mt-5 text-secondary">Copyright © dentist-care.netlify.com</p>
        </section>
    );
};

export default Footer;