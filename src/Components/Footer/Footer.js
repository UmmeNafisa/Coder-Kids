import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-info m-0 mb-0">
            <div className=" d-flex justify-content-center p-4 icons">
                <p><FontAwesomeIcon icon={faFacebook} /></p>
                <p><FontAwesomeIcon icon={faYoutube} /></p>
                <p><FontAwesomeIcon icon={faTwitter} /></p>
                <p><FontAwesomeIcon icon={faInstagram} /></p>
                <p><FontAwesomeIcon icon={faVoicemail} /></p>
            </div>
            <Container className="d-md-flex justify-content-around pb-sm-5">
                <div className="address">
                    <h3> CODER KIDS </h3>
                    <h5>Houston, Texas</h5>
                    <br />
                    <h5>(832) h50-9568
                    </h5>
                    <h5>info@coderkids.com</h5>
                </div>
                <div className="text-white info">
                    <h5> School Partnerships</h5>
                    <h5> Online Coding Classes For Kids</h5>
                    <h5> Coding Classes For Home schoolers</h5>
                    <h5> Resources</h5>
                    <h5>Jobs</h5>
                    <h5>Our Team</h5>
                    <h5>Contact Us</h5>
                    <h5> Private Lessons</h5>
                </div>
            </Container>
            <p className="text-center">© 2020 Coder Kids, LLC.</p>
        </div>
    );
};

export default Footer;
<i class="fab fa-facebook"></i>