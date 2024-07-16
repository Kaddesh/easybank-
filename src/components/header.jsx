import React, { useState } from "react";
import "../styles/header.scss";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    
    
    
    const handleClick = () => {
         setOpen(!isOpen);
    }

   
    return (
        <header className={`header ${isOpen ? 'open' : '' }`}>
            <div className={`overlay has-fade ${isOpen ? 'fade-in' : 'fade-out'}`}></div>

            <nav className="container container--pall flex flex-jc-sb flex-ai-c">
                <a href="/" className="header__logo">
                    <img src="./assets/logo.svg" alt="Easybank" />
                </a>

                <div
                    id="btnHamburger"
                 
                    className="header__toggle hide-for-desktop "
                    onClick={handleClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="header__links hide-for-mobile">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/blog">Blog</a>
                    <a href="/career">Careers</a>
                </div>

                <a href="./" className="button header__cta hide-for-mobile">
                    Request Invite
                </a>
            </nav>

            <div className={`header__menu ${isOpen ? 'is-open' : ''}`}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
                <a href="/">Careers</a>
            </div>
        </header>
    );
};

export default Header;
