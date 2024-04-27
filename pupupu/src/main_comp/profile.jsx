import p from './profile.module.css'

const profile = () => {
    return (
        <div className={p.page}>
            <header className={p.header}>Вход в аккаунт</header>
            <form className={p.form}>

                <div className={p.item}>
                    <label for="email">Почта :</label>
                    <input type="email" id="email" name="email" className={p.input} required></input>
                </div>
                <div className={p.item}>
                    <label for="password">Пароль :</label>
                    <input type="password" id="password" name="password" className={p.input} required></input>
                </div>
                <div className={p.buton}>
                    <input type="submit" value="Войти" className={p.button} />
                </div>

            </form>
        </div>
    )


}

export default profile