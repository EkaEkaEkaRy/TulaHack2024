import dayjs from 'dayjs'
import b from './book.module.css'
import Select from 'react-select'
const booking = ({ active, setActive }) => {
    const types = [
        { value: 'Столик', label: 'Столик' },
        { value: 'Помещение', label: 'Помещение' }
    ]
    return (

        <div className={b.window_wrap}>
            <header className={b.header}>
                Бронирование
            </header>
            <form className={b.form}>
                <div className={b.item}>
                    <label for="name" className={b.label}>Имя</label>
                    <input type="text" id="name" name="name" placeholder={"Имя"} className={b.input} required ></input>
                </div>
                <div className={b.item}>
                    <label for="email" className={b.label}>Почта</label>
                    <input type="email" id="email" name="email" placeholder={"Почта"} className={b.input} required></input>
                </div>
                <div className={b.item}>
                    <label for="phone" className={b.label}>Телефон</label>
                    <input type="tel" id="phone" name="phone" placeholder={"Телефон"} className={b.input} required></input>
                </div>
                
                <div className={b.item}>
                    <label for="type">Тип брони</label>
                    <Select options={types} name='type' id='type' placeholder={"Тип"} />
                </div>
                <div className={b.item}>
                    <label for="date">Дата</label>
                    <input type="date" id="date" name="date" className={b.input} required></input>
                </div>
                <div className={b.item}>
                    <label for="time">Время</label>
                    <input type="time" id="time" name="time" className={b.input} required></input>
                </div>
                <div className={b.buton}>
                    <input type="submit" value="Забронировать" className={b.button} />
                </div>

            </form>
        </div>

    )
}

export default booking