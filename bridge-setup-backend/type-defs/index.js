const { gql } = require("apollo-server-express");

/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-15 14:49:27
 * @LastEditTime: 2022-03-15 15:04:47
 * @FilePath: /bridge-setup/bridge-setup-backend/type-defs/index.js
 */
const typeDefs = gql`
  type Email {
    _id: String
    usedby: String
    mailaddress: String
    password:String
    customercode:String
  }

  type Query {
    emails: [Email]
    email(id:ID!):Email
  }
`

module.exports = typeDefs