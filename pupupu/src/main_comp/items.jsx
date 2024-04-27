import i from './items.module.css'
import image from './image.jpg'
import Book from './book'


const item = (props) => {
    return (
        <div className={i.item}>
            <div ><img src={image} alt="Фото ресторана" className={i.picture} /></div>
            <div className={i.descript}>
                <div className={i.descript_header}>{props.name}</div>
                <ul className={i.details}>
                    <li>{props.price}</li>
                    <li>{props.cuisine}</li>
                    <li>{props.address}</li>
                </ul>
            </div>
            <div className={i.buton}>
                <input type="button" value={"Забронировать"} className={i.button} />
            </div>
        </div>
    )
}

export default item