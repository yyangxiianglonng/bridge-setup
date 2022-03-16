/*
 * @Author: yangxianglong
 * @Description: mongodb连接，mongo模型导出。
 * @Date: 2022-03-15 10:04:32
 * @LastEditTime: 2022-03-15 12:46:20
 * @FilePath: /bridge-setup/bridge-setup-backend/models/index.js
 */

const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')


mongoose.connect(dbUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connection success')
});

module.exports = {
    Email: require('./email')
}