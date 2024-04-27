import h from './header.module.css'
const header = () => {
    return (
        <div className={h.header}>
            <div className={h.name}>
                Забронируйте столик онлайн
            </div>
            <div className={h.enter}>
                <div>Войти</div>
                <div>создать аккаунт</div>
            </div>
        </div>
    )
}

export default header