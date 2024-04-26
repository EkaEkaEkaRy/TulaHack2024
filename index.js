const express = require("express");

const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',     
    password: 'qwert',
    database: 'transport',
    port: 5432
};

const client = new pg.Client(config);

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


   
(async () => {
     try {
        app.listen(1337);
        console.log("Сервер ожидает подключения...");
    }catch(err) {
        return console.log(err);
    } 
})();

process.on("SIGINT", async() => {
       
    console.log("Приложение завершило работу");
    process.exit();
});
