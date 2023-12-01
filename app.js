const express = require('express');
const app = express();
const db = require('./db');

// 如果是json传参  使用中间件解析 JSON 数据
// app.use(express.json());

// 创建一个路由来处理查询请求
app.get('/users', function(req, res) {
  // console.log(req.body)
  // 如果是url get传参
  const { id, name } = req.query;
  console.log('id：', id);
  console.log('name：', name);
  // 执行查询操作
  db.getUsers('data_source', function(error, results) {
    if (error) {
      // 发送错误响应给客户端
      res.status(500).json({ error: '查询数据库时出错' });
      return;
    }
    // 将查询结果作为JSON响应发送给客户端
    res.json(results);
  });
});

// 关闭数据库连接
// connection.end();

// 设置视图引擎为EJS
app.set('view engine', 'ejs');

// 导入路由文件
const indexRouter = require('./routes/index');

// 注册路由
app.use('/', indexRouter);

// 启动服务器
const port = 3000;
app.listen(port, function() {
  console.log('服务器已启动，监听端口：' + port);
});
