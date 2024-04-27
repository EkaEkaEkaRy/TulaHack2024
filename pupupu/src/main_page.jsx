import mp from "./main_page.module.css"
import Item from './main_comp/items'
import Filters from './main_comp/filters'
import Header from './main_comp/header'
import Book from './main_comp/book'

const main = () => {
    return (
        <div className={mp.page}>
            <div>
                <header className={mp.header}>
                    <Header />
                </header>
                <main className={mp.main}>
                    <div className={mp.filters}>
                        Фильтры
                        <Filters />
                    </div>
                    <div className={mp.items}>
                        <Book />
                        <Item name="Нагоя" price="2000" cuisine="азиатская" address="Люблянка"/>
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