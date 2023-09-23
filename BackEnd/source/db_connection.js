const mysql = require('mysql2');

const db = {
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.MYSQL_DATABASE,
};

const connection = mysql.createConnection(db);

connection.connect(function (error) {
    if (error) {
        console.log('error connecting:', error.stack);
    }
    console.log('Successfully connected to database!')
});

module.exports = connection