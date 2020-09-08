const dotenv = require('dotenv');
const PORT = process.argv.PORT || process.env.PORT || 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// API
const rest = require('./api');

// SETUP DOTENV
dotenv.config();

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
    // I could work with the resulting HTML/JSON here. I could also just return it
    console.log(`onResult: (${statusCode})\n\n${JSON.stringify(result)}`);

    res.statusCode = statusCode;

    res.status(200).send(result);
  });
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED. LISTENING TO PORT ${PORT}`);
});
