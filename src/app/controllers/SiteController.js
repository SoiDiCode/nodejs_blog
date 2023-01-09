// Viết funtion-handles(khi mà gọi đến action(path))
// tạo class để quản lý funtion-handles
var Course = require('../models/Course');

class SiteController {
    // tạo hàm tổng quát
    // [GET] /news
    home(req, res , next) {
        // Course.find({},function (err,courses) {
        //     if (!err) {
        //         res.json(courses);
        //         return ;
        //     }
        //    next(err);
        // })
        res.render('home');
    }

    // Sử dụng dưới dạng promise()
    // Cách truyền tham số để lấy ra hendlesbar
    // search handlesbar
    // khi khai báo 2 biến bên client vs server 
    // giống nhau thì chỉ cần khai báo 1 biến
    // map giống như list
    // chuyển object của moogo thành object đối tượng
    // Course.find({})
    // .then(courses => {
    //     courses = courses.map(course => course.toObject())
    //     res.render('home',{courses} 
    // })
    // .catch(err => next(err));


    // :slug : parameter on URL / theo sau :id , :name
    // [GET] /news/:Slug
    search(req, res) {
        res.render('search');
    }
}

// tạo export để xuất ra ngoài dùng cho các lớp khác
// tạo luôn 1 đối tượng ms chứ ko cần phải tạo đối tượng bên lớp import
module.exports = new SiteController();
