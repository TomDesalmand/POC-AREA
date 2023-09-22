const express = require('express');
const bodyParser = require('body-parser')
const getDBConnection = require('./source/db_connection');

const app = express();
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(function (req, res) {
    res.end()
});

server.listen(port, async function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port:' + port);
    }
    const connection = await getDBConnection();
    const[rows, fields] = await connection.query('SELECT * FROM users');
    console.log(rows, fields)
});
