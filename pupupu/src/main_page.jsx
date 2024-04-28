import mp from "./main_page.module.css"
import Item from './main_comp/items'
import Filters from './main_comp/filters'
import Header from './main_comp/header'
import Book from './main_comp/book'
import {useNavigate} from "react-router-dom"
import { useState } from "react";

const Main = () => {
    
    /*
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false));
    */

    async function getUser() {
        const response = await fetch("http://localhost:1337/api/restaurant", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (response.ok === true) {
            const user = await response.json();
            localStorage.setItem('Restaurants', JSON.stringify(user));
        }
        ;

        //if (response.status === 400) document.getElementById("answer_for_user_login").innerHTML = "неверный пароль";
        //else {
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
        //}

    };
    
    if (!localStorage.getItem('Restaurants')) getUser();
    let rest_list = JSON.parse(localStorage.getItem('Restaurants'));
    console.log(rest_list)
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
                        {rest_list.map(element => {
                            return (
                            <Item name={element["name"]} address={element["address"]} cuisine={element["cuisine"]} price={element["bill"]} image={element["image"]} restid={localStorage.setItem('restid', element["id"])}/>
                        )})}
               
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Main