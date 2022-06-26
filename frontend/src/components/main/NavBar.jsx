import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./Main.module.css";
import { BiAddToQueue } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
const NavBar = () => {

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.reload()
    }

    document.body.style.display = "block"
    document.body.style.backgroundColor = "#fff"
    return (
        <nav>
            <div className={classes.logo}>School</div> 
            <label htmlFor="btn">
                <span className={classes.iconNew}><BiMenu/></span>
            </label>
            
            <input type="checkbox" className={classes.input_to_hide} id="btn"></input>
            <ul>
                <li><Link className={classes.active} to="#">Home</Link></li>
                <li>
                    <label htmlFor="btn-1" className={classes.show}>Features +</label>
                    <Link to="#">Features</Link>
                    <input className={classes.input_to_hide} type="checkbox" id="btn-1"></input>
                    <ul>
                        <li><Link to="#">Pages</Link></li>
                        <li><Link to="#">Elements</Link></li>
                        <li><Link to="#">Icons</Link></li>
                    </ul>
                </li>
                <li>
                    <label htmlFor="btn-2" className={classes.show}>Services +</label>
                    <Link to="#">Services</Link>
                    <input type="checkbox" className={classes.input_to_hide} id="btn-2"></input>
                    <ul>
                        <li><Link to="#">Web Design</Link></li>
                        <li><Link to="#">App Design</Link></li>
                        <li>
                            <label htmlFor="btn-3" className={classes.show}>More +</label>
                            <Link to="#">More <span className={classes.icon}><BiAddToQueue/></span></Link>
                            <input type="checkbox" className={classes.input_to_hide} id="btn-3"></input>
                            <ul>
                            <li><Link to="#">Submenu-1</Link></li>
                            <li><Link to="#">Submenu-2</Link></li>
                            <li><Link to="#">Submenu-3</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link to="/todolist">My notes</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link onClick={handleLogout} to="#">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;