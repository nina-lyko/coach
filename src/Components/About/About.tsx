import './About.scss';

export const About = () => {
    return (
        <section className="about container">
            <div className="logo-and-text flex">
                <img src="https://raw.githubusercontent.com/nina-lyko/coach/gh-pages/assets/img/AboutBanner.jpg" alt="pic" />

                <div className="name">
                    <h1>Нина Литовченко</h1>
                    <h2>
                        Тренер по фигурному катанию с многолетним стажем.
                        Мастер спорта России.
                    </h2>
                </div>
            </div>

            <div className="about-box">
                <h3>Обо мне:</h3>
                <ul>
                    <li>С 2009-2012г была в составе сборной города Санкт-Петербурга. Тренировалась под руководством тренеров: Кленина Т.В., Васильев О.К.</li>
                    <li>С 2012-2014г работала в английском театре на льду “Wild rose”.</li>
                    <li>С 2016-2017г работала в ШФК «Динаcтия» тренером и постановщиком программ.</li>
                    <li>С 2014-2020г работала солисткой в компании “Willy Bietak Production”.</li>
                    <li>В 2019г году участвовала в постановке ледового шоу под руководством Канадского хореографа Кристофера Нолана.</li>
                </ul>
            </div>

            <div className="container flex">
                <div className="philosophy flex">
                    <h3> Мой подход:</h3>
                    <ul>
                        <li>Творческое и ответственное отношение к учебно-тренировочному процессу.</li>
                        <li>Постановка программ для соревнований, все разряды фигурного катания.</li>
                        <li>Обучение техники многооборотных прыжков.</li>
                        <li>Постановка конька, обучение техники скольжения с 0.</li>
                    </ul>
                </div>

                <img className="picture" src="https://raw.githubusercontent.com/nina-lyko/coach/gh-pages/assets/img/AboutPic.JPG" alt="pic"/>
            </div>
        </section>
    )
}