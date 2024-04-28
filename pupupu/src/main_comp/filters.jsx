import { Component } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import f from "./filters.module.css"

const Filter = () => {
    const navigate = useNavigate();
    const cuisine = [
        {name: "итальянская"}, 
        {name: "европейская"}, 
        {name: "русская"}, 
        {name: "смешанная"},
        {name: "кавказская"},
        {name: "японская"},
        {name: "корейская"}
    ]
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

    const handlerSubmit = async (event) => {
        const mas1 = []
        const mas2 = []
        const mas3 = []
        for (let i = 0; i < 2; i++) {
            mas1[i] = `type${i+1}` 
        }
        for (let i = 0; i < 4; i++) {
            mas2[i] = `price${i+1}` 
        }
        for (let i = 0; i < 7; i++) {
            mas3[i] = `cuisine${i+1}` 
        }
        event.preventDefault();
        const { mail, password } = user;
        const res = await fetch('http://localhost:1337/api/restaurant', {
            method: "POST",
            headers: {
                "Accept": "application/json", "Content-Type":
                    "application/json"
            },
            body: JSON.stringify({
                mas1,
                mas2,
                mas3
            })
        });
        const data = await res.json();
        if (res.status === 404 || !data) document.getElementById("answer_for_user_login").innerHTML = "пользователя не существует";
        else if (res.status === 400) document.getElementById("answer_for_user_login").innerHTML = "неверный пароль";
        else {
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
            localStorage.setItem('res', data);
            
        }

    };
    const count = 0;
    return (
        <div>
            <div className={f.filter_options}>
                <form action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                    <div className={f.options}>
                        <div>
                            <input type="button" value={"Тип брони"} className={f.header} ></input>
                            <div className={f.items}>
                                <label><input type="checkbox" onClick={handlerChange} name={"столик"} id="type1"/>
                                    столик</label>
                                <label><input type="checkbox" onClick={handlerChange} name={"помещение"} id="type2"/>
                                    помещение</label>
                            </div>
                        </div>
                        <div>
                            <input type="button" value={"Средний чек"} className={f.header} ></input>
                            <div className={f.items}>
                                <label><input type="checkbox" onClick={handlerChange} name={"до 1000"} id="price1"/>
                                    до 1000</label>
                                <label><input type="checkbox" onClick={handlerChange} name={"1000 - 2000"} id="price2"/>
                                    1000 - 2000</label>
                                <label><input type="checkbox" onClick={handlerChange} name={"2000 - 3000"} id="price3"/>
                                    2000 - 3000</label>
                                <label><input type="checkbox" onClick={handlerChange} name={"от 3000"} id="price4"/>
                                    от 3000</label>
                            </div>
                        </div>
                        <div>
                            <input type="button" value={"Кухня"} className={f.header} ></input>
                            <div className={f.items}>
                                
                                {cuisine.map(c => {
                                    count +=1
                                    return (
                                        <label><input type="checkbox" onClick={handlerChange} name={c.name} id={"cuisine" + count}/>
                                    {c.name}</label>
                                    )
                                    
                                })}
                            </div>
                        </div>
                    </div>
                    <input type="button" value={"Найти"} className={f.find} ></input>
                </form>
            </div>

        </div>

    )
}


/*
class Filter extends Component {
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
        const Type = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" onClick={handlerChange} name={"столик"} />
                        столик</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"помещение"} />
                        помещение</label>
                </div>
            )
        }
        const Price = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" onClick={handlerChange} name={"до 1000"} />
                        до 1000</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"1000 - 2000"} />
                        1000 - 2000</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"2000 - 3000"} />
                        2000 - 3000</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"от 3000"} />
                        от 3000</label>
                </div>
            )
        }
        const Cuisine = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" onClick={handlerChange} name={"Бразильская"} />
                        Бразильская</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"Корейская"} />
                        Корейская</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"Турецкая"} />
                        Турецкая</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"Греческая"} />
                        Греческая</label>
                </div>
            )
        }
        return (
            <div>
                <div className={f.filter_options}>
                    <form>
                        <div className={f.options}>
                            <div>
                                <input type="button" value={"Тип брони"} className={f.header} onClick={() => { this.handleClick() }} id="0"></input>
                                {this.state.shouldshowElem && <Type />}
                            </div>
                            <div>
                                <input type="button" value={"Средний чек"} className={f.header} onClick={() => { this.handleClick() }} id="1"></input>
                                {this.state.shouldshowElem && <Price />}
                            </div>
                            <div>
                                <input type="button" value={"Кухня"} className={f.header} onClick={() => { this.handleClick() }} id="2"></input>
                                {this.state.shouldshowElem && <Cuisine />}
                            </div>
                        </div>
                        <input type="button" value={"Найти"} className={f.find} onClick={() => { this.findOpt() }}></input>
                    </form>
                </div>

            </div>

        )
    }
}*/


export default Filter