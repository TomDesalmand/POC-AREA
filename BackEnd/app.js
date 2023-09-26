require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRegistration = require('./source/register_user');
const userListing = require('./source/list_users');
const userLogin = require('./source/login_user');

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/register', userRegistration);
app.use('/list', userListing);
app.use('/login', userLogin);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
