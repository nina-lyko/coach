export const Links = () => {


    const links = [
        {
            id: 1,
            url: "https://www.instagram.com/coach.nina__ly.ko",
            name: "fab fa-instagram"
        },
        {
            id: 2,
            url: "tg://resolve?domain=@skating_is_love",
            name: "fab fa-telegram-plane"
        },
        {
            id: 3,
            url: "https://www.youtube.com/channel/UCct0J2h7lJHT22S8RM1zkeA",
            name: "fab fa-youtube"
        },
    ]

    return (
        <div className="links flex">
            {
                links.map(item => <a key={item.id} href={item.url} className="social-link" target="blank"><i className={item.name}></i></a>)
            }
        </div>
    )
}