const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000


// cấu hình sử dụng file tĩnh
// kiểm tra những path cấu hình static
app.use(express.static(path.join(__dirname, 'public')));


// cấu hình lại đuôi file handlebars : .handlebars => any
var config = {
    extname: '.hbs'
}

// logger tiêu chuẩn(có nhiều loại logger)
// HTTP Logger
app.use(morgan('combined'));


//Temple engines
// định nghĩa handlebars = ()
app.engine('hbs', handlebars.engine(config));
// ứng dụng express(app) sử dụng view engine là handlebars
app.set('view engine', 'hbs')
// chỉ lại đường dẫn
// nếu lỗi đổi dấu \\
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('Path', __dirname);//=> lấy ra đường dẫn chạy index.js( D:\NodeJS\F8_NodeJS\demo_nodemon\src)
// console.log('Path', path.join(__dirname, 'resource/views'));

// đây là 1 router : gồm trang điều hướng , req và res
// chú ý : dấu => around funtion còn ko có  là function
// khi trong thân function có 1 câu lệnh đơn thì around ko cần '{}'
// app.get("/trang-chu",
//     (req, res) =>
//         res.send(
//             "hello mọi người"
//         ));

app.get("/trang-chu", (req, res) => res.render("home"));

app.get("/tin-tuc", (req, res) => res.render("news"));

// để lấy parameterquery thì gọi qua hàm query
app.get("/search", (req, res) => {
    console.log(req.query.author);
    res.render("search")
});


app.listen(port, () => {
    console.log(`App is running with port is ${port}`)
})