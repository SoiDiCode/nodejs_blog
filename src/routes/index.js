// lấy dũ liệu từ file new.js nơi chứa các path
const siteroutes = require('./site');
const newsroutes = require('./news');

function route(app) {
    // newsroutes và siteroutes : sẽ là những nhánh con của /news or /
    // tất cả URL chứa /news/random : chạy vào /news
    app.use('/news', newsroutes);
    app.use('/', siteroutes);
}

// xuất ra route khi goi đến index.js
module.exports = route;
