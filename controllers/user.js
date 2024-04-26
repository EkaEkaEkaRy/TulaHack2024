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
        const findUser = await pool.query(
            `SELECT id, name FROM users WHERE mail = '${mail}' AND password = '${password}';`
        )
        res.json(findUser["rows"])
    } catch (err) {
        res.sendStatus(400);
    }
    
});


exports.add_user = app.post("", async(req, res) => {  
    try {
        const {name, mail, number, password} = req.body;
        const findUser = await pool.query(
            `SELECT id FROM users WHERE mail = '${mail}';`
        )
        if (findUser["rows"].length != 0) sendStatus(400);
        const newUser = await pool.query(
            `INSERT INTO users (name, mail, number, password) VALUES ('${name}', '${mail}', '${number}', '${password}');`
        )
        res.json(newUser["rows"])
    } catch (err) {
        res.sendStatus(400);
    }
    
});