const express = require('express');
const router = express.Router();
const connection = require('./db_connection');
const { authenticateToken } = require('./token');

router.get('/', authenticateToken, (req, res) => {
    connection.query(
        'SELECT * FROM users',
        (error, results) => {
            if (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ error: 'Failed to fetch users' });
                return;
            }
            
            console.log('Fetched all users successfully');
            res.status(200).json(results);
        }
    );
});

module.exports = router