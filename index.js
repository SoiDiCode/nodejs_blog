var express = require('express');
var app = express();
var port = 3000

// đây là 1 router : gồm trang điều hướng , req và res
// chú ý : dấu => around funtion còn ko có  là function
// khi trong thân function có 1 câu lệnh đơn thì around ko cần '{}'
app.get("/trang-chu", (req, res) => res.send("hello mọi người"));
app.listen(port, () => {
    console.log(`App is running with port is ${port}`)
})