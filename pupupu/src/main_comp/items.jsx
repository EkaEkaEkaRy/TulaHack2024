import { Component } from "react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import i from './items.module.css'
import image from './image.jpg'
import Book from './book'

const Item = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className={i.item}>
            <div ><img src={image} alt="Фото ресторана" className={i.picture} /></div>
            <div className={i.descript}>
                <div className={i.descript_header}>{ }</div>
                <ul className={i.details}>
                    <li>{ }</li>
                    <li>{ }</li>
                    <li>{ }</li>
                </ul>
            </div>
            <div className={i.buton}>
                <NavLink to="/Booking">
                    <input type="button" value={"Забронировать"} className={i.button} />
                </NavLink>

            </div>

        </div>
    )
}
/*
class Items extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            shouldshowElem: false,
        };
    }
    handleClick() {
        if (this.state.shouldshowElem == false) {
            this.setState({
                shouldshowElem: true,
            })
        }
        else {
            this.setState({
                shouldshowElem: false,
            })
        }
    }
    render() {
        const Booking = () => {
            const [modalActive, setModalActive] = useState(true)
            return (
                <Book />
            )
        }

        return (
            <div className={i.item}>
                <div ><img src={image} alt="Фото ресторана" className={i.picture} /></div>
                <div className={i.descript}>
                    <div className={i.descript_header}>{ }</div>
                    <ul className={i.details}>
                        <li>{ }</li>
                        <li>{ }</li>
                        <li>{ }</li>
                    </ul>
                </div>
                <div className={i.buton}>
                    <input type="button" value={"Забронировать"} className={i.button} onClick={() => { this.handleClick() }} />

                </div>

            </div>
        )
    }

}*/



export default Item