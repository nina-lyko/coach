import './Contacts.scss';

export const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container flex">
                <h2>Всегда на связи!</h2>
                <div className="box flex">
                    <div className="contacts-wrapper flex">
                        <div className="cube flex">
                            <h3>
                                Буду рада ответить на все Ваши вопросы в Telegram!
                            </h3>
                            <a href="tg://resolve?domain=@skating_is_love" className="link" target="blank"><i className="fab fa-telegram-plane"></i></a>
                        </div>
                        <img src="https://st2.depositphotos.com/4216129/7602/v/950/depositphotos_76028217-stock-illustration-figure-skating-cute-girl.jpg" alt="pic" />
                    </div>
                    <div className="contacts-wrapper second flex">
                        <div className="cube flex">
                            <h2>Следите за моими каналами:</h2>
                            <a href="https://www.instagram.com/coach.nina__ly.ko" target="blank"><h3>Instagram</h3></a>
                            <a href="https://www.youtube.com/channel/UCct0J2h7lJHT22S8RM1zkeA" target="blank"><h3>YouTube</h3></a>
                        </div>
                        <div className="text flex">
                                <p>
                                    Будь честным с самим собой. 
                                    Верь в чудеса, и самое главное, верь в свои силы. 
                                    Преодолевая каждую трудность, мы становимся лучшей версией себя! 
                                    Занимаясь фигурным катанием ты обретешь силу, гибкость, хореографическую подготовку и хобби, которое может стать частью твоей жизни!
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}