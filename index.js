const express = require("express");
const Router = require("./routers/Routers.js");

const app = express();
app.use(express.json());



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use("/api", Router);
   
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
