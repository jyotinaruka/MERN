const express = require("express");
const faker = require("faker");
const app = express();

// To handle post request data:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require('./routes/routes')(app);


app.listen(8000, () => console.log("now listening"));