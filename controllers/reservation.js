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
            `INSERT INTO reservation (user, type, table, room, count, reservation_date, hours, comment) VALUES ('${user}', '${type}', '${table}', '${room}', '${count}','${date}','${hours}','${comment}') RETURNING id;`
        )
        res.json(newReserv["rows"])

    } catch (err) {
        res.sendStatus(400);
    }
    
});

exports.find_reserv = app.get("", async(req, res) => {  
    try {
        const id = req.query.id;

        const Reserv = await pool.query(
            `SELECT type, count, reservation_date, hours FROM reservation WHERE id = ${id}`
        )
        res.json(Reserv["rows"])

    } catch (err) {
        res.sendStatus(400);
    }
    
});

exports.find_max_count_table = app.get("", async(req, res) => {
    const id = req.query.id;
    const type = req.query.type;
    try {
        if (type == "стол") 
        {
            const Reserv = await pool.query(
                `SELECT MAX("tables".count) FROM restaurants INNER JOIN rooms 
                ON restaurants.id = rooms.restaurant INNER JOIN "tables" ON
                rooms.id = "tables".room WHERE restaurants.id = ${id}`
            )
        } else {
            const Reserv = await pool.query(
                `SELECT MAX(count) FROM
                (SELECT SUM("tables".count) as count FROM restaurants INNER JOIN rooms 
                ON restaurants.id = rooms.restaurant INNER JOIN "tables" ON
                rooms.id = "tables".room WHERE restaurants.id = ${id} AND rooms.status = true GROUP BY "tables".room)`
            )
        }
        res.json(Reserv["rows"])

    } catch (err) {
        res.sendStatus(400);
    }
});