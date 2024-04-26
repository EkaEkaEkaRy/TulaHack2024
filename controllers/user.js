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

   
exports.find_user = app.get("", async(req, res) => {  
    try {
        const mail = req.query.mail;
        const password = req.query.password;
        const newUser = await pool.query(
            `SELECT id, name FROM users WHERE mail = '${mail}' AND password = '${password}';`
        )
        res.json(newUser["rows"])
    } catch (err) {
        console.error(err +  ' ошибка');
    }
    
});


