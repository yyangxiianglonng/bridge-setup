/*
 * @Author: yangxianglong
 * @Description: 
 * @Date: 2022-03-15 14:57:15
 * @LastEditTime: 2022-03-15 15:08:50
 * @FilePath: /bridge-setup/bridge-setup-backend/resolvers/index.js
 */
const resolvers = {
    Query: {
        async emails(parent, args, { dataSources }) {
            const emails = await dataSources.emails.getEmails()
            return emails
        },
        async email(parent, { id }, { dataSources }) {
            const email = await dataSources.emails.getEmail(id)
            return email
        }
    }
}
module.exports = resolvers