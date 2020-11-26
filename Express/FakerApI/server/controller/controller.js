const { User, Company } = require('../models/model')
module.exports = {
    newUser: (req, res) => {
        res.json({data: new User()})
    },


    companies: (req, res) => {
        res.json({ data: [new Company(), new Company()] })
    },

    userCompany: (req, res) => {
        res.json({ data: [new User(), new Company()]})
    },

   
}