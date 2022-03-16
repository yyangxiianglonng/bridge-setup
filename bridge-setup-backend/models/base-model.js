/*
 * @Author: yangxianglong
 * @Description: 定义mongo模型通用字段
 * @Date: 2022-03-15 10:26:53
 * @LastEditTime: 2022-03-15 10:28:31
 * @FilePath: /bridge-setup/bridge-setup-backend/models/base-model.js
 */

module.exports = {
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}