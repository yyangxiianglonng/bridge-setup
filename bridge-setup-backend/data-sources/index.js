const dbModel = require('../models')
const Emails = require('./email')

module.exports = () => {
    return {
        emails: new Emails(dbModel.Email)
    }
}