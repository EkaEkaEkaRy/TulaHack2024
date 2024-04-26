import f from "./filters.module.css"

const filters = () => {
    return (
        <div className={f.filter_options}>
            <div className={f.options}>
                <div>
                <input type="button" value={"Цена"} className={f.header}></input>
                <div className={f.prices}>
                    <label><input type="checkbox" />
                    до 1000</label>
                    <label><input type="checkbox" />
                    1000 - 2000</label>
                    <label><input type="checkbox" />
                    2000 - 3000</label>
                    <label><input type="checkbox" />
                    от 3000 </label>
                </div>
                </div>
                <div>
                <input type="button" value={"Кухня"} className={f.header}></input>
                <div className={f.prices}>
                    <label><input type="checkbox" />
                    Бразильская</label>
                    <label><input type="checkbox" />
                    Корейская</label>
                    <label><input type="checkbox" />
                    Турецкая</label>
                    <label><input type="checkbox" />
                    Греческая</label>
                </div>
                </div>
            </div>
            <input type="button" value={"Найти"} className={f.find}></input>
        </div>
    )
}

export default filters