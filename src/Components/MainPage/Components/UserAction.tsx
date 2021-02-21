import { useState } from "react"

export const UserAction = () => {

    const [active, setActive] = useState(false)

    return (
        <section className="user-action">
            <div className="container flex">
                <div className="text-and-photo flex">
                    <h1>Открыт дополнительный набор в Спортивно-оздоровительную группу<br />(0-1 год
                    обучения)<br />2015-2017 годa рождения.</h1>
                    <img src="https://raw.githubusercontent.com/nina-lyko/coach/gh-pages/assets/img/IMG_4109.jpg" alt="" />
                </div>
                <button className="get-lesson" type="button" onClick={() => active ? setActive(false) : setActive(true)}>Записаться на занятие</button>
                <div className={`links ${active && "active"}`}>
                    <h2>Всегда на связи в Instagram и Telegram!</h2>
                    <div className="links-box flex">
                        <a href="https://www.instagram.com/coach.nina_ly.ko" target="blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="tg://resolve?domain=@skating_is_love" target="blank">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}