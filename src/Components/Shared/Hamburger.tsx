import { useState } from "react"

export const Hamburger = () => {

    
    const [hambActive, setHambActive] = useState(false)

    return (
        <button  onClick={() => !hambActive ? setHambActive(true) : setHambActive(false) } className={`hamburger hamburger--squeeze ${hambActive && "is-active"}`} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}