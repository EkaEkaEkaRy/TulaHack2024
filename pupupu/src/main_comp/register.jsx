import p from './profile.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    /*
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));
    */
    
    let [user, setuser] = useState({
        name: "",
        mail: "",
        number: "",
        password: ""
    })

    let name, value;


    const handlerChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const {name, mail, number, password} = user;
        const res = await fetch('http://localhost:1337/api/user', {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type":
            "application/json" },
            body: JSON.stringify({
            name,
            mail,
            number,
            password,
            })
        });
        const data = res.json();
        if (res.status === 404 || !data) document.getElementById("answer_for_user_login").innerHTML = "пользователя не существует";
        else if (res.status === 400) document.getElementById("answer_for_user_login").innerHTML ="неверный пароль";
        else {
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
            localStorage.setItem('userMailId', mail);
            navigate("*");
          }
    };

    return (
        <div className={p.page}>
            <header className={p.header}>Регистрация</header>
            <form className={p.form} action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                <div className={p.item}>
                    <label for="name" className={p.label}>Имя</label>
                    <input type="text" id="name" name="name" placeholder={"Имя"} className={p.input} value={user.name} onChange={handlerChange} required ></input>
                </div>
                <div className={p.item}>
                    <label for="email" className={p.label}>Почта</label>
                    <input type="email" id="email" name="email" placeholder={"Почта"} className={p.input} value={user.mail} onChange={handlerChange} required></input>
                </div>
                <div className={p.item}>
                    <label for="phone" className={p.label}>Телефон</label>
                    <input type="tel" id="phone" name="phone" placeholder={"Телефон"} className={p.input} value={user.number} onChange={handlerChange} required></input>
                </div>
                <div className={p.item}>
                    <label for="password">Пароль :</label>
                    <input type="password" id="password" name="password" placeholder={"Пароль"} className={p.input} value={user.password} onChange={handlerChange} required></input>
                </div>
                <div className={p.buton}>
                    <input type="submit" value="Создать аккаунт" className={p.button} />
                </div>
            </form>
        </div>
    )
}

export default Register