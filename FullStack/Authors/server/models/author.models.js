const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name should have 3 character"]
    },
    lastName: {
        type: String,
        required: [true, "Last name should have 3 character"]
    }
});

module.exports.Author = mongoose.model("Author", AuthorSchema);

