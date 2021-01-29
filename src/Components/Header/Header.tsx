import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Links } from "./Components/Links"
import './Header.scss'

export const Header = () => {

    const [onHambClick, setOnHambClick] = useState(false)

    return (
        <header>

            <img src="https://raw.githubusercontent.com/andr-ll/coach/gh-pages/assets/img/Nina%20banner.png" alt="pic" className="banner" />

            <div className="container flex">
                <div className="nav-and-links flex">
                    <nav className="flex desktop-only">
                        <Link to="/coach">Главная</Link>
                        <Link to="/coach/about">Обо мне</Link>
                        <Link to="/coach/contacts">Контакты</Link>
                    </nav>
                    <img className="logo mobile-only" src="https://github.com/andr-ll/coach/blob/gh-pages/assets/img/NewLogo.png?raw=true" alt="pic" />
                    <Links />
                </div>

                <img className="logo desktop-only" src="https://github.com/andr-ll/coach/blob/gh-pages/assets/img/NewLogo.png?raw=true" alt="pic" />
                

                <button className={`hamburger hamburger--squeeze mobile-only ${onHambClick ? "is-active" : ""}`} type="button" onClick={() => onHambClick ? setOnHambClick(false) : setOnHambClick(true)}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <nav className={`flex mobile-only ${onHambClick ? "" : "nav-hidden"}`}>
                <Link to="/coach" onClick={() => setOnHambClick(false)}>Главная</Link>
                <Link to="/coach/about" onClick={() => setOnHambClick(false)}>Обо мне</Link>
                <Link to="/coach/contacts" onClick={() => setOnHambClick(false)}>Контакты</Link>
            </nav>
        </header>
    )
}