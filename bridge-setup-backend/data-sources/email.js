/*
 * @Author: yangxianglong
 * @Description: email数据操作
 * @Date: 2022-03-15 13:31:17
 * @LastEditTime: 2022-03-15 13:56:07
 * @FilePath: /bridge-setup/bridge-setup-backend/data-sources/email.js
 */

const { MongoDataSource } = require('apollo-datasource-mongodb')

class Emails extends MongoDataSource {
    getEmail(emailId) {
        // return this.findOneById(emailId)
        return this.findOneById(emailId)
    }
    getEmails() {
        return this.model.find()
    }
}

module.exports = Emails