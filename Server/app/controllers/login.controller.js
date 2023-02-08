

// const db = require("../db");
const { Client } = require('pg'); 
const client = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'Duongminh410',
    database:'sunrise_english',
})
client.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
        client.end();
    });

// Retrieve all Account from the database.
exports.getAll = function(req, res, next) {
    try {
        // Connect to database to get data
        client.query('SELECT * FROM accounts', (err, dbres) => {
            if (err) {
                console.log(err.stack);
            } else {
                res.status(200).json(dbres.rows);
            }
        })
    }
    catch(err) {
        res.status(500).json({ error: err });
    }
}

exports.getAccountByEmail = function(req, res, next) {
    try {
        client.query("select * from accounts where email='" + req.query.email + "'", (err, dbres) => {
            if(err) {
                console.log(err.stack);
            }
            else {
                res.status(200).json(dbres.rows)
            }
        })

    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getLastAccountID = function(req, res, next) {
    try {
        client.query("select max(accid) from accounts", (err, dbres) => {
            if(err) {
                console.log(err.stack);
            }
            else {
                res.status(200).json(dbres.rows)
            }
        })

    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.addNewAccount = function(req, res, next) {
    try {
        const qr = "INSERT INTO accounts VALUES " + 
                    "("+req.query.accid+
                    ", '"+req.query.email+
                    "', '"+req.query.dname+
                    "', "+req.query.psw+
                    ", '"+req.query.rol+
                    "', "+req.query.stts+
                    ", '"+req.query.avt+
                    "', '"+req.query.sex+"')"
        client.query(qr,
                (err, dbres) => {
                if(err) {
                    console.log(err.stack);
                }
                else {
                    res.status(200).json(dbres);
                }
            }
        )

    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
