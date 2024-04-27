import b from './book.module.css'

const booking = () => {
    const styles = {
        main: {
            ariaHidden: "true",
            backgroundColor: "#f1f1f1",
            width: "100%",
        },
        inputText: {
            padding: "10px",
            color: "red",
        },
    };
    return (
        <div className={b.book_window} style={styles.main}>
            <div className={b.window_wrap}>
                <header>
                    Бронирование
                </header>
                <label for="name">Имя :</label>
                <input type="text" id="name" name="name" required></input>
                <label for="email">Почта :</label>
                <input type="email" id="email" name="email" required></input>
                <label for="password">Пароль :</label>
                <input type="password" id="password" name="password" required></input>
            </div>
        </div>
    )
}

export default booking