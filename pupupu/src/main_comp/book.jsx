import dayjs from 'dayjs'
import {useState} from "react";
//import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import b from './book.module.css'
import Select from 'react-select'


const Booking = (props) => {
    const restaurant = props.Id;
    const types = [
        { value: 'стол', label: 'стол' },
        { value: 'зал', label: 'зал' }
    ]
    const navigate = useNavigate();
    //const [authenticated, setauthenticated] = useState(false);

    let [user, setuser] = useState({
        reastaurant: restaurant,
        user: localStorage.getItem('Id'),
        type: "",
        count: "",
        date: "",
        time: "",
        hours: "",
        comment: ""
    })
    let name, value;

    const handlerChange = (event) =>
    {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value})
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const {restaurant, user, type, count, date, time, hours, comment} = user;
        
        
            const res = await fetch('http://localhost:1337/api/reservation', {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type":
                "application/json" },
                body: JSON.stringify({
                restaurant,
                user,
                type,
                count,
                date,
                time,
                hours,
                comment
                })
            });
            const data = res.json();
            console.log(res.status)
            if (res.status === 404 || !data) document.getElementById("answer_for_user").innerHTML = "Пользователь уже существует"
            else if (res.status === 500) document.getElementById("answer_for_user").innerHTML = "Попробуйте позже"
            //setauthenticated(true)
            else {
                navigate("*");
            }

            
            
    };
    return (

        <div className={b.window_wrap}>
            <header className={b.header}>
                Бронирование
            </header>
            <form className={b.form} action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                <div className={b.item}>
                    <label for="name" className={b.label}>Имя</label>
                    <input type="text" id="name" name="name" placeholder={"Имя"} className={b.input} value = {user.name} onChange={handlerChange} required ></input>
                </div>
                
                <div className={b.item}>
                    <label for="type">Тип брони</label>
                    <Select options={types} name='type' id='type' placeholder={"Тип"} />
                </div>
                <div className={b.item}>
                    <label for="count">Количество</label>
                    <input type="text" id="count" name="count" className={b.input} value = {user.count} onChange={handlerChange} required></input>
                </div>
                <div className={b.item}>
                    <label for="date">Дата</label>
                    <input type="date" id="date" name="date" className={b.input} value = {user.date} onChange={handlerChange} required></input>
                </div>
                <div className={b.item}>
                    <label for="time">Время</label>
                    <input type="time" id="time" name="time" className={b.input} value = {user.time} onChange={handlerChange} required></input>
                </div>
                <div className={b.item}>
                    <label for="hours">Часы</label>
                    <input type="text" id="hours" name="hours" className={b.input} value = {user.hours} onChange={handlerChange} required></input>
                </div>
                <div className={b.item}>
                    <label for="comm">Комментарий</label>
                    <input type="text" id="comm" name="comm" className={b.input} value = {user.comment} onChange={handlerChange} required></input>
                </div>
                <div className={b.buton}>
                    <input type="submit" value="Забронировать" className={b.button} />
                </div>

            </form>
        </div>

    )
}

export default Booking