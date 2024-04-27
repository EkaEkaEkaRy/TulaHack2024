import b from './book.module.css'

const booking = ({active, setActive}) => {
    return (
        <div className={b.background}>
            <div className={b.book_window} >
                <div className={b.window_wrap}>
                    <header>
                        Бронирование
                    </header>
                    <div className={b.close}></div>
                    <label for="name">Имя :</label>
                    <input type="text" id="name" name="name" required></input>
                    <label for="email">Почта :</label>
                    <input type="email" id="email" name="email" required></input>
                    <label for="date">Дата :</label>
                    <input type="text" id="date" name="date" required></input>
                    <label for="time">Время :</label>
                    <input type="text" id="time" name="time" required></input>
                </div>
            </div>
        </div>
    )
}

export default booking