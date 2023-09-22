const express = require('express');
const bodyParser = require('body-parser')
const userRegistration = require('./source/register_user');
const userListing = require('./source/list_users');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/register', userRegistration);
app.use('/list', userListing);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
