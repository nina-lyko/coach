import { useCallback, useEffect, useState } from "react"

export const MainInfo = () => {

    const [slider, setSlider] = useState({
        firstImg: true,
        secondImg: false,
        thirdImg: false
    });
    const [loaded, setLoaded] = useState(false)

    const picturesChange = useCallback(() => {
        setTimeout(() => {
            setSlider({
                firstImg: false,
                secondImg: true,
                thirdImg: false
            })
            setTimeout(() => {
                setSlider({
                    firstImg: false,
                    secondImg: false,
                    thirdImg: true
                })
                setTimeout(() => {
                    setSlider({
                        firstImg: true,
                        secondImg: false,
                        thirdImg: false
                    });
                    picturesChange()
                }, 3000)
            }, 3000)
        }, 3000);
    }, [])

    useEffect(() => {
        picturesChange();

        return () => {
            setLoaded(false);
            setSlider({
                firstImg: true,
                secondImg: false,
                thirdImg: false
            })
        }
        }, [loaded, picturesChange])

    return (
        <section className="main-info">
            <div className="container flex">
                <h1 className="spoiler">Фигурное катание больше чем спорт!</h1>
                <div className="photo-and-text flex">
                    <div className="images" onLoad={() => setLoaded(true)}>
                        <img src="https://raw.githubusercontent.com/nina-lyko/coach/gh-pages/assets/img/IMG_4096.jpg" alt="img" className={`pic ${slider.firstImg && "visible"}`} />
                        <img src="https://raw.githubusercontent.com/nina-lyko/coach/gh-pages/assets/img/IMG_2069.JPG" alt="img" className={`pic ${slider.secondImg && "visible"}`} />
                        <img src="https://raw.githubusercontent.com/nina-lyko/coach/gh-pages/assets/img/IMG_2136.jpg" alt="img" className={`pic ${slider.thirdImg && "visible"}`} />
                    </div>
                    <div className="text">
                        <h2>Нина Литовченко</h2>
                        <p>
                            ❄︎ Мастер спорта России по фигурному катанию. <br /> <br />
                            ❄︎ Победитель, учасник Международных и Всероссийских соревнований. <br /> <br />
                            ❄︎ Опыт работы тренером более 8 лет.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}