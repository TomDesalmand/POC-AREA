const express = require('express');
const router = express.Router();
const getDBConnection = require('./db_connection');
const connection = getDBConnection();

router.post('/register', (req, res) => {
    const {email, name, surname, password} = req.body;
    connection.query(
        `INSERT INTO users (email, name, surname, password) VALUES (${email}, ${name}, ${surname}, ${password})`,
        (error, results) => {
            if (error) {
                console.error('Error inserting user:', err);
                res.status(500).json({ error: 'User registration failed' });
                return;
            }
            console.log('User registered successfully');
            res.status(200).json({ message: 'User registered successfully' });
        }
    );
});

module.exports = router;