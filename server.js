const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getUserData, search } = require('./graphql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
let PORT = process.env.PORT || 8080;

app.get('/get-user-data', (req, res) => {
  getUserData(req, res);
});

app.post('/search', (req, res) => {
  search(req, res);
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
