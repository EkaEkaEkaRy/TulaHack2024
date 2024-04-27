const express = require("express");
const userRouter = require("./routers/userRouters.js");
const reservRouter = require("./routers/reservationRouters.js")
const restaurantRouter = require("./routers/restaurantRouters.js")

const app = express();
app.use(express.json());
app.use(express.static(`./public`));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/api", restaurantRouter);
app.use("/api", reservRouter);
app.use("/api", userRouter);

   
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
