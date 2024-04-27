const Pool = require('pg').Pool
const express = require("express");

const pool = new Pool({
    user: 'postgres',
    password: 'qwert',
    host: 'localhost',
    port: 5432,
    database: 'hackathon'
});

      
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


exports.add_reserv = app.post("", async(req, res) => {  
    try {
        const {user, type, table, room, count, date, hours, comment } = req.body;

        const newReserv = await pool.query(
            `INSERT INTO reservation (user, type, table, room, count, reservation_date, hours, comment) VALUES ('${user}', '${type}', '${table}', '${room}', '${count}','${date}','${hours}','${comment}');`
        )
        res.json(newReserv["rows"])

    } catch (err) {
        res.sendStatus(400);
    }
    
});