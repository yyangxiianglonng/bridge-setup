/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-12 23:08:58
 * @LastEditTime: 2022-03-15 15:32:49
 * @FilePath: /bridge-setup/bridge-setup-backend/index.js
 */
const { ApolloServer, gql } = require('apollo-server');
const { Email } = require('./models/')
const Emails = require('./data-sources/email')
const schema = require('./schema')


// const typeDefs = gql`
//   type Email {
//     _id: String
//     usedby: String
//     mailaddress: String
//     password:String
//     customercode:String
//   }

//   type Query {
//     emails: [Email]
//     email(id:ID!):Email
//   }
// `;

// const resolvers = {
//   Query: {
//     async emails(parent, args, { dataSources }) {
//       const emails = await dataSources.emails.getEmails()
//       return emails
//     },
//     async email(parent, { id }, { dataSources }) {
//       const email = await dataSources.emails.getEmail(id)
//       return email
//     }
//   }
// }

const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
