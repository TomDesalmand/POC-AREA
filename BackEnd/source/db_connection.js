const mysql = require('mysql2');

const db = {
    host: 'mysql',
    user: 'root',
    password: '1611',
    database: 'POCUsers',
};

const connection = mysql.createConnection(db);

connection.connect(function (error) {
    if (error) {
        console.log('error connecting:', error.stack);
    }
    console.log('Successfully connected to database!')
});

module.exports = connection