import mp from "./main_page.module.css"
import Item from './main_comp/items'
import Filters from './main_comp/filters'
import Header from './main_comp/header'
import Book from './main_comp/book'

const Main = () => {
    const navigate = useNavigate();
    
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

    async function getUser() {
        const response = await fetch("http://localhost:1337/api/user?mail=" + user.mail + "&password=" + user.password, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (response.ok === true) {
            const user = await response.json();
            localStorage.setItem('Restaurants', user);
        }
        ;

        //if (response.status === 400) document.getElementById("answer_for_user_login").innerHTML = "неверный пароль";
        //else {
            //setauthenticated(true)
            //localStorage.setItem("authenticated", true);
        //}

    };
    
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

                        {localStorage.getItem('Restaurants').forEach(element => {
                            <Item name={element["name"]} address={element["address"]} cuisine={element["cuisine"]} price={element["bill"]} image={element["image"]}/>
                        })};               
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Main