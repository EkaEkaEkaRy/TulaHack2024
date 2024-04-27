import { Component } from "react"
import f from "./filters.module.css"

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
    render() {
        const Type = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" />
                        столик</label>
                    <label><input type="checkbox" />
                        помещение</label>
                </div>
            )
        }
        const Price = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" />
                        до 1000</label>
                    <label><input type="checkbox" />
                        1000 - 2000</label>
                    <label><input type="checkbox" />
                        2000 - 3000</label>
                    <label><input type="checkbox" />
                        от 3000 </label>
                </div>
            )
        }
        const Cuisine = () => {
            return (
                <div className={f.items}>
                    <label><input type="checkbox" />
                        Бразильская</label>
                    <label><input type="checkbox" />
                        Корейская</label>
                    <label><input type="checkbox" />
                        Турецкая</label>
                    <label><input type="checkbox" />
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
                                <input type="button" value={"Тип помещения"} className={f.header} onClick={() => { this.handleClick() }} id="0"></input>
                                {this.state.shouldshowElem && <Type />}
                            </div>
                            <div>
                                <input type="button" value={"Цена"} className={f.header} onClick={() => { this.handleClick() }} id="1"></input>
                                {this.state.shouldshowElem && <Price />}
                            </div>
                            <div>
                                <input type="button" value={"Кухня"} className={f.header} onClick={() => { this.handleClick() }} id="2"></input>
                                {this.state.shouldshowElem && <Cuisine />}
                            </div>
                        </div>
                        <input type="button" value={"Найти"} className={f.find} onClick={() => { this.handleClick() }}></input>
                    </form>
                </div>

            </div>

        )
    }
}


export default Filter