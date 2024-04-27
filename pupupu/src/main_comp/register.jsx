import p from './profile.module.css'

const register = () => {
    return (
        <div className={p.page}>
            <header className={p.header}>Регистрация</header>
            <form className={p.form}>
                <div className={p.item}>
                    <label for="name" className={p.label}>Имя</label>
                    <input type="text" id="name" name="name" placeholder={"Имя"} className={p.input} required ></input>
                </div>
                <div className={p.item}>
                    <label for="email" className={p.label}>Почта</label>
                    <input type="email" id="email" name="email" placeholder={"Почта"} className={p.input} required></input>
                </div>
                <div className={p.item}>
                    <label for="phone" className={p.label}>Телефон</label>
                    <input type="tel" id="phone" name="phone" placeholder={"Телефон"} className={p.input} required></input>
                </div>
                <div className={p.item}>
                    <label for="password">Пароль :</label>
                    <input type="password" id="password" name="password" className={p.input} required></input>
                </div>
                <div className={p.buton}>
                    <input type="submit" value="Создать аккаунт" className={p.button} />
                </div>
            </form>
        </div>
    )
}

export default register