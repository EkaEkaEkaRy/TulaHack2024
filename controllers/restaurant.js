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

   
exports.find_ad = app.get("", async(req, res) => {  
    try {
        const findRestaurant = await pool.query(
            `SELECT name, address, cuisine, bill, image FROM restaurants;`
        )
        res.json(findRestaurant["rows"])
    } catch (err) {
        res.sendStatus(400);
    }
    
});
