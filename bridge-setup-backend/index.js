/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-12 23:08:58
 * @LastEditTime: 2022-03-15 15:32:49
 * @FilePath: /bridge-setup/bridge-setup-backend/index.js
 */
const { ApolloServer, gql } = require('apollo-server');
const dataSource = require('./data-sources')
const schema = require('./schema')

const server = new ApolloServer({
  schema,
  dataSource
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
