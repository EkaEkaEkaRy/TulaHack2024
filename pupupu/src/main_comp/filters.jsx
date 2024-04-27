import { Component } from "react"
import f from "./filters.module.css"

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}
const mood_isTrue = []

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            shouldshowElem: false,
        };
    }
    handleClick() {
        if(this.state.shouldshowElem == false) {
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
    

    findOpt() {
        
    }
    render() {
        const Type = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" onClick={handlerChange} name={"столик"}/>
                        столик</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"помещение"}/>
                        помещение</label>
                </div>
            )
        }
        const Price = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" onClick={handlerChange} name={"до 1000"}/>
                        до 1000</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"1000 - 2000"}/>
                        1000 - 2000</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"2000 - 3000"}/>
                        2000 - 3000</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"от 3000"}/>
                        от 3000</label>
                </div>
            )
        }
        const Cuisine = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" onClick={handlerChange} name={"Бразильская"}/>
                        Бразильская</label>
                    <label><input type="checkbox" onClick={handlerChange } name={"Корейская"}/>
                        Корейская</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"Турецкая"}/>
                        Турецкая</label>
                    <label><input type="checkbox" onClick={handlerChange} name={"Греческая"}/>
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
}


export default Filter