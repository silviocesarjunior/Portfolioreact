import React, { useState } from 'react';
import "./header.css";
import logo from "../../img/silvoca.png";

const Header = () => {

    //toggle menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navlist">
                        {/*<ul className="link f_flex uppercase">*/}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About me</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                       
                    </div>
                </div>
            </header >
            <section className="demo"></section>
        </>
    )
}

export default Header