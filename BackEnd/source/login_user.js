const express = require('express');
const router = express.Router();
const connection = require('./db_connection');
const { generateAccessToken } = require('./token');

router.post('/', (req, res) => {
    const {email, password} = req.body;
    connection.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        (error, results) => {
            if (error) {
                console.error('Error logging user:', error);
                res.status(500).json({ error: "User doesn't exist" });
                return;
            } else {
                const user = results[0];
                if (user.password != password) {
                    res.status(500).json({ error: 'User login failed' });
                } else {
                    res.status(200).json({ "token": generateAccessToken(user) });
                }
            }
        }
    )
});

module.exports = router;
