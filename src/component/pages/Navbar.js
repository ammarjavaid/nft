import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = (props) => {

    const [click, setClick] = useState(false)
    const update = () => {
        setClick(!click);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>

            <navbar data-aos="fade-down">
                <div className='logo'>
                    <Link to="/"> <img src={logo} alt="logo" /> </Link>
                </div>
                <div className='modes-wrape'>
                    <div className='mode' onClick={props.current}>
                        {props.mode === "dark" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                    </div>
                    <div className='icons' onClick={update}>
                        {!click ? <FaBars /> : <FaTimes />}
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link to="/"> Features </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/"> About </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/"> Launch </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to="/"> Sign Up </Link>
                    </li>
                    <li onClick={props.current}>
                        {props.mode === "dark" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                    </li>
                </ul>
            </navbar>

        </>
    )
}

export default Navbar