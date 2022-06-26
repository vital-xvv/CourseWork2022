import React from 'react';
import "./TestLinkIcon.css";
import progLogo from "./coding.jpg";
import { FiLink } from "react-icons/fi";
import {Link} from 'react-router-dom';

const ProgTestLink = () => {
    return (
        <div className='main-test-link-icon-container'>
            <div className='main-test-link-banner'>
                <img src={progLogo}></img>
                
            </div>
            <div className='glass-test-link-icon-cover'>
                <p className='test-title'>Programming Test</p>
                <Link to="/programmingtest"><span><FiLink/></span></Link>
            </div>
        </div>
    );
};

export default ProgTestLink;