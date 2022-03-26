/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-15 14:51:01
 * @LastEditTime: 2022-03-15 15:59:10
 * @FilePath: /bridge-setup/bridge-setup-backend/schema.js
 */
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./type-defs')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

module.exports = schema