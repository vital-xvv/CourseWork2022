import React from 'react';
import "./TestLinkIcon.css";
import { FiLink } from "react-icons/fi";
import bioLogo from './biology.jpg';
import {Link} from 'react-router-dom';

const BiologyTestLink = () => {
    return (
        <div className='main-test-link-icon-container'>
            <div className='main-test-link-banner'>
                <img src={bioLogo}></img>
                
            </div>
            <div className='glass-test-link-icon-cover'>
                <p className='test-title' style={{color: "#000"}}>Biology Test</p>
                <Link to="/biologytest"><span><FiLink/></span></Link>
            </div>
        </div>
    );
};

export default BiologyTestLink;