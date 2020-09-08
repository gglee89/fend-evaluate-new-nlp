const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mockData = require('./mockData');

// API
const rest = require('./api');

// SETUP MIDDLEWARE
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(cors());

// SETUP ENDPOINTS
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.get('/test', (req, res) => {
  res.status(200).json(mockData);
});

app.post('/meaningCloudAPI', (req, res) => {
  let { text } = req.body;
  let options = {
    method: 'POST',
    hostname: 'api.meaningcloud.com',
    path: `/sentiment-2.1?key=${
      process.env.API_KEY
    }&of=json&lang=en&txt=${encodeURI(text)}`,
    maxRedirects: 20,
  };

  rest.getJSON(options, (statusCode, result) => {
    res.statusCode = statusCode;
    res.status(200).send(result);
  });
});

module.exports = app;
