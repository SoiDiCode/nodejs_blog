// Quản lý những router đến lưu
const express = require('express');
const router = express.Router();
// const router1 = express.Router();
const controller = require('../app/controllers/NewsControllers');

// luôn khớp từ trên xuống
router.use('/chi-tiet', controller.detail);
router.use('/', controller.index);

// router.use("/chi-tiet", controller.chitiet);
module.exports = router;
// router, router1
