import React, {useEffect} from 'react';
import logo from "../images/logo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);

    const links = [
        {
            title: "About",
            data: ["About", "Teams", "Legal"]
        },
        {
            title: "NFT",
            data: ["OpenSea", "Maker", "Learn"]
        },
        {
            title: "Contact",
            data: ["Press", "Support"]
        },
        {
            title: "Social",
            data: ["Twitter", "Instagram"]
        },
    ];

    const socialLink = [
        <i className="fab fa-facebook"></i>,
        <i className="fab fa-twitter"></i>,
        <i className="fab fa-instagram"></i>,
        <i className="fab fa-tiktok"></i>
    ];

    return (
        <>
            <footer data-aos="fade-up">
                <div className='upper'>
                    <div className='brand-container'>
                        <div className='brand'>
                            <img src={logo} alt="logo" />
                        </div>
                        <p> Exclusive NFT Collection </p>
                        <ul>
                            {
                                socialLink.map((curElm, index) => {
                                    return (
                                        <>
                                            <li key={index}> {curElm} </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='links'>
                        {
                            links.map(({ title, data }, index) => {
                                return (
                                    <>
                                        <div className='link' key={index}>
                                            <h4> {title} </h4>
                                            <ul>
                                                {
                                                    data.map((link, index2) => {
                                                        return (
                                                            <>
                                                                <li key={index2}> {link} </li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='lower'>
                    <span> &copy; Copyright 2022 NFT </span>
                    <span> Launching August 2022 </span>
                </div>
            </footer>
        </>
    )
}

export default Footer