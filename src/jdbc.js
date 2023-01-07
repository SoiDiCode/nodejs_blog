const conn = require('mysql2');

var connection = conn.createConnection({
    user: 'root',
    password: '123456789aA@',
    port: '3306',
    host: 'localhost'

})

connection.connect((err, data) => {
    if (err) throw err;
    console.log("Connect successfull !!!");
});

connection.end((err, data) => {
    if (err) throw err;
    console.log("Closed successfull !!!");
})

