/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-15 14:49:27
 * @LastEditTime: 2022-03-15 15:04:47
 * @FilePath: /bridge-setup/bridge-setup-backend/type-defs/index.js
 */
const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    foo:String
  }
`

module.exports = typeDefs