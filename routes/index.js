const express = require('express');
const router = express.Router();

// 定义根路由的处理程序
router.get('/', function (req, res) {
  res.render('index', { title: 'Express App' });
});

module.exports = router;
