const faker = require("faker");
class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();        
    }
}

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            'street': faker.address.streetAddress(),
            'city': faker.address.city(),
            'state': faker.address.state(),
            'zipcode': faker.address.zipCode(),
            'country': faker.address.country()

        }
    }
}
module.exports = {
    User,
    Company,
}