// Viết funtion-handles(khi mà gọi đến action(path))
// tạo class để quản lý funtion-handles

class NewsController {
    // tạo hàm tổng quát
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // :slug : parameter on URL / theo sau :id , :name
    // [GET] /news/:Slug
    detail(req, res) {
        res.send('Hello chi tiết');
    }
}

// tạo export để xuất ra ngoài dùng cho các lớp khác
// tạo luôn 1 đối tượng ms chứ ko cần phải tạo đối tượng bên lớp import
module.exports = new NewsController();
