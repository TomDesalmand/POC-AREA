const express = require('express');
const router = express.Router();
const connection = require('./db_connection');

router.post('/', (req, res) => {
    const { email, name, surname, password } = req.body;
    connection.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        (error, results) => {
            if (error) {
                console.error('Error checking user existence:', error);
                res.status(500).json({ error: 'User registration failed' });
                return;
            }
            if (results.length > 0) {
                console.error('User already exists');
                res.status(400).json({ error: 'User already exists' });
            } else {
                connection.query(
                    `INSERT INTO users (email, name, surname, password) VALUES ("${email}", "${name}", "${surname}", "${password}")`,
                    (error, results) => {
                        if (error) {
                            console.error('Error inserting user:', error);
                            res.status(500).json({ error: 'User registration failed' });
                            return;
                        }
                        console.log('User registered successfully');
                        res.status(200).json({ message: 'User registered successfully' });
                    }
                );
            }
        }
    );
});

module.exports = router;