const { ApolloServer, gql } = require('apollo-server');
const schema = require('./schema')

const dataSources = require('./data-sources')


const server = new ApolloServer({
  schema,
  dataSources
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
