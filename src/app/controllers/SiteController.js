// Viết funtion-handles(khi mà gọi đến action(path))
// tạo class để quản lý funtion-handles

class SiteController {
    // tạo hàm tổng quát
    // [GET] /news
    home(req, res) {
        res.render('home');
    }
    // :slug : parameter on URL / theo sau :id , :name
    // [GET] /news/:Slug
    search(req, res) {
        res.render('search');
    }
}

// tạo export để xuất ra ngoài dùng cho các lớp khác
// tạo luôn 1 đối tượng ms chứ ko cần phải tạo đối tượng bên lớp import
module.exports = new SiteController();
