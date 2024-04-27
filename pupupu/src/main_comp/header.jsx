import h from './header.module.css'
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Profile from './profile'

const header = () => {
    return (
        <div className={h.header}>
            <div className={h.name}>
                Бронируйте онлайн
            </div>
            <div className={h.enter}>

                <NavLink to="/Profile" id="0">
                    <div className={h.buton}>
                        <div className={h.button}>Войти</div>
                        
                    </div>
                </NavLink>
                <NavLink to="/Register" id="1">
                    <div className={h.buton}>
                        <div className={h.button}>Создать аккаунт</div>
                    </div>
                </NavLink>
            </div>
            
        </div>
    )
}

export default header