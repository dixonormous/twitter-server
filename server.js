const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getData } = require('./userData');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
let PORT = process.env.PORT || 8080;

app.post('/get-user-data', (req, res) => {
  getData(req, res);
})

app.listen(PORT, () => console.log(`Running on ${PORT}`));
