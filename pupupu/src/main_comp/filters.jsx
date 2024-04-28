import { Component } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import f from "./filters.module.css"

const Filter = () => {
    const navigate = useNavigate();
    const cuisine = [
        {name: [1, "итальянская"]}, 
        {name: [2, "европейская"]}, 
        {name: [3, "русская"]}, 
        {name: [4, "смешанная"]},
        {name: [5, "кавказская"]},
        {name: [6, "японская"]},
        {name: [7, "корейская"]}
    ]

    const mas1 = []
    const mas2 = []
    const mas3 = []
    /*
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));
    */

        function contains(arr, elem) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === elem) {
                    return true;
                }
            }
            return false;
        }
        
        function delete_element(arr, elem) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === elem) {
                    return arr.splice(i, 1);
                }
            }
            console.log("error")
        }

        let name, value

        const handlerChange1 = (event) =>
    {
        name = event.target.name;
        if (contains(mas1, name))
        {
            value = false;
            delete_element(mas1, name);
        }
        else {
            value = true;
            mas1.push(name);
        }
    }

    const handlerChange2 = (event) =>
    {
        name = event.target.name;
        if (contains(mas2, name))
        {
            value = false;
            delete_element(mas2, name);
        }
        else {
            value = true;
            mas2.push(name);
        }
    }

    const handlerChange3 = (event) =>
    {
        name = event.target.name;
        if (contains(mas3, name))
        {
            value = false;
            delete_element(mas3, name);
        }
        else {
            value = true;
            mas3.push(name);
        }
    }



    const handlerSubmit = async (event) => {
        event.preventDefault();
        let type = mas1
        let cuisine = mas2
        let bill = mas3
        console.log(mas1, mas2, mas3)
        const res = await fetch('http://localhost:1337/api/restaurant', {
            method: "POST",
            headers: {
                "Accept": "application/json", "Content-Type":
                    "application/json"
            },
            body: JSON.stringify({
                type,
                cuisine,
                bill
            })
        });
        const data = await res.json();
        
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
        localStorage.setItem('Restaurants', JSON.stringify(data)); 
        navigate("/*")


    };

    return (
        <div>
            <div className={f.filter_options}>
                <form action="#" method="POST" name="userSignup" onSubmit={handlerSubmit}>
                    <div className={f.options}>
                        <div>
                            <input type="button" value={"Тип брони"} className={f.header} ></input>
                            <div className={f.items}>
                                <label><input type="checkbox" name="стол" onClick={handlerChange1} id="type1"/>
                                    столик</label>
                                <label><input type="checkbox" name="зал" onClick={handlerChange1} id="type2"/>
                                    помещение</label>
                            </div>
                        </div>
                        <div>
                            <input type="button" value={"Средний чек"} className={f.header} ></input>
                            <div className={f.items}>
                                <label><input type="checkbox" onClick={handlerChange3} name="до 1000" id="price1"/>
                                    до 1000</label>
                                <label><input type="checkbox" onClick={handlerChange3} name="1000 - 2000" id="price2"/>
                                    1000 - 2000</label>
                                <label><input type="checkbox" onClick={handlerChange3} name="2000 - 3000" id="price3"/>
                                    2000 - 3000</label>
                                <label><input type="checkbox" onClick={handlerChange3} name="от 3000" id="price4"/>
                                    от 3000</label>
                            </div>
                        </div>
                        <div>
                            <input type="button" value={"Кухня"} className={f.header} ></input>
                            <div className={f.items}>
                                
                                {cuisine.map(c => {
                                    return (
                                        <label><input type="checkbox" onClick={handlerChange2} name={c.name[1]} id={"cuisine" + c.name[0]}/>
                                    {c.name[1]}</label>
                                    )
                                    
                                })}
                            </div>
                        </div>
                    </div>
                    <input type="submit" value={"Найти"} className={f.find} ></input>
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