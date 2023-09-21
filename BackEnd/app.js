const http = require('http');
const mysql = require('mysql');
const port = 3001;
  
const server = http.createServer(function (req, res) {
    res.end()
})

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '1611',
    database: 'POCUsers'
})
  
server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port:' + port);
    }
})