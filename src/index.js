const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000

// Khi muốn sử dung method / thư viện nào trong express => sử dụng từ khóa 'use'
// cấu hình sử dụng file tĩnh
// kiểm tra những path cấu hình static
app.use(express.static(path.join(__dirname, 'public')));


// từ 4.16 , body-parser đã đc tích hợp vào express còn dưới phải install body-parser npm => dử dụng qs npm để parser : Object
// middleware để sử lí dữ liệu từ form (post) => body
// sử dụng form để submit
app.use(express.urlencoded({
    extended: true
}));

// 1 số dụng thư viện để submit or code js để submit
// VD : XMLHttprequest , fetch , axios , ajax
app.use(express.json())

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

    res.render("search")
});

// khi post sẽ chưa có dữ liệu log ra 
//  brower => controller sẽ đi qua middleware
// express chưa xử lý được dữ liệu từ method post để lưu vào body => undefined
// còn đối với get thì đã đc xử lí thông qua middleware nên query => get data => có dữ liệu
app.post("/search", (req, res) => {
    console.log(req.body); // ==> undifined
    res.send("Chuyển trang thành công !")
});


app.listen(port, () => {
    console.log(`App is running with port is ${port}`)
})