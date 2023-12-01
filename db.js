const mysql = require('mysql');

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'xxxx', // 服务器ip
  user: 'app',
  password: 'xxxx',
  database: 'xxxx' // 数据库
});

// 连接到数据库
connection.connect(function(err) {
  if (err) {
    console.error('连接数据库时出错：' + err.stack);
    return;
  }
  console.log('已连接到数据库，连接ID为：' + connection.threadId);
});

// 导出查询函数
module.exports = {
  getUsers: function(tableName, callback) {
    // 构建查询语句
    const query = `SELECT * FROM ${tableName}`;

    // 执行查询操作
    connection.query(query, function (error, results, fields) {
      if (error) {
        console.error('查询数据库时出错：' + error.stack);
        callback(error, null);
        return;
      }
      // 返回查询结果
      callback(null, results);
    });
  }
};
