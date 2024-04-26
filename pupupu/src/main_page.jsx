import mp from "./main_page.module.css"
import Item from './main_comp/items'
import Filters from './main_comp/filters'

const main = () => {
    return (
        <div className={mp.page}>
            <div>
                <header className={mp.header}>
                    Забронируйте столик онлайн
                </header>
                <main className={mp.main}>
                    <div className={mp.filters}>
                        Фильтры
                        <Filters />
                    </div>
                    <div className={mp.items}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </main>
            </div>
        </div>
    )

}

export default main