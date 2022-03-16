/*
 * @Author: yangxianglong
 * @Description: 定义mongo邮箱模型
 * @Date: 2022-03-15 10:22:11
 * @LastEditTime: 2022-03-15 10:49:05
 * @FilePath: /bridge-setup/bridge-setup-backend/models/email.js
 */

const mongoose = require('mongoose')
const baseModel = require('./base-model')

const emailSchema = new mongoose.Schema({
    ...baseModel,
    usedby: {
        type: String,
        required: true
    },
    mailaddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    customercode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Email', emailSchema)