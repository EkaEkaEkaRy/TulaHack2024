import i from './items.module.css'
import image from './image.jpg'
const item = () => {
    return (
        <div className={i.item}>
            <div ><img src={image} alt = "Фото ресторана" className={i.picture}/></div>
            <div className={i.descript}>
                <div className={i.descript_header}>Название ресторана</div>
                <ul className={i.details}>
                    <li>Средний чек</li>
                    <li>Кухня</li>
                    <li>Адрес</li>
                </ul>
            </div>
            <div className={i.buton}>
            <input type="button" value={"Забронировать"} className={i.button}/>
            </div>
        </div>
    )
}

export default item