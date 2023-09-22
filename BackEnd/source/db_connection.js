const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'mysql',
    user: 'root',
    password: '1611',
    database: 'POCUsers',
};

async function createDBConnection() {
    try {
        const connection = mysql.createPool(dbConfig);
        console.log('Connected to MySQL');
        return connection;
    } catch (err) {
        console.error('Error connecting to MySQL:', err);
        return null;
    }
}

module.exports = createDBConnection;