const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')

// 连接MongoDB 数据库
mongoose.connect(dbUri);

const db = mongoose.connection;

// 当连接失败的时候
db.on('error', console.error.bind(console, 'connection error:'));

// 当连接成功的时候
db.once('open', function () {
    console.log('connection success')
});

// 组织导出模型类
module.exports = {
    User: require('./user')
}