const controller = require('../controller/controller');
module.exports = app => {

    app.get('/api/users/new', controller.newUser);
    app.get('/api/companies/new', controller.companies);
    app.get('/api/user/company', controller.userCompany);



}