import p from './profile.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();
    /*
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));
    */

    let [user, setuser] = useState({
        mail: "",
        password: ""
    })

    let name, value;


    const handlerChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    }

    async function getUser(id) {
        const response = await fetch("/api/users?mail=" + user.mail + "&password=" + user.password, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (response.ok === true) {
            const user = await response.json();
        }
        ;

        if (response.status === 400) document.getElementById("answer_for_user_login").innerHTML = "неверный пароль";
        else {
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
            localStorage.setItem('Id', user["Id"]);
            navigate("*");
        }

    };

    return (
        <div className={p.page}>
            <header className={p.header}>Вход в аккаунт</header>
            <form className={p.form} action="#" method="GET" name="userSignup" onSubmit={getUser}>

                <div className={p.item}>
                    <label for="email">Почта :</label>
                    <input type="email" id="email" name="email" className={p.input} value={user.mail} onChange={handlerChange} required></input>
                </div>
                <div className={p.item}>
                    <label for="password">Пароль :</label>
                    <input type="password" id="password" name="password" className={p.input} value={user.password} onChange={handlerChange} required></input>
                </div>
                <div className={p.buton}>
                    <input type="submit" value="Войти" className={p.button} />
                </div>

            </form>
        </div>
    )


}

export default Profile