const dbModel = require('../models')
const Users = require('./user')

module.exports = () => {
    return {
        users: new Users(dbModel.User)
    }
}