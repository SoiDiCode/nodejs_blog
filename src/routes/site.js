// Quản lí những trang đơn lẻ ko có nhiều nhánh (/home , /search) còn nhiều sẽ tạo ra routers
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
router.use('/search', SiteController.search);
router.use('/', SiteController.home);

module.exports = router;
