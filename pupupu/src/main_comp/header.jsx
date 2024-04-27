import h from './header.module.css'

const header = () => {
    return (
        <div className={h.header}>
            <div className={h.name}>
                Бронируйте онлайн
            </div>
            <div className={h.enter}>
                <div className={h.buton}>
                <input type="button" value={"Войти"} className={h.button}/>
                </div>
                <div className={h.buton}>
                <input type="button" value={"Создать аккаунт"} className={h.button}/>
                </div>
            </div>
        </div>
    )
}

export default header