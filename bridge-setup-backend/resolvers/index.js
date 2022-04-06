const { UserInputError } = require('apollo-server-express')

const resolvers = {
    Query: {
        foo() {
            return 'hello'
        }
    },
    Mutation: {
        async createUser(parent, { user }, { dataSources }) {
            // 判断用户是否存在
            const users = dataSources.users
            const user1 = await users.findByUsername(user.username)
            if (user1) {
                throw new UserInputError('用户已存在')
            }
            const user2 = await users.findByEmail(user.email)
            if (user2) {
                throw new UserInputError('邮箱已存在')
            }
            const userData = await users.saveUser(user)
            // console.log("2022-04-06 17:34:03 ⛴✏✎✐ ✎५⋆*:", userData)
            return {
                user: {
                    ...userData.toObject()
                }
            }
        }
    }
}

module.exports = resolvers