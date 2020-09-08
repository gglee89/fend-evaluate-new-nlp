const dotenv = require('dotenv');
const PORT = process.argv.PORT || process.env.PORT || 8080;
const express = require('express');
const app = require('./app');

// SETUP DOTENV
dotenv.config();

app.listen(PORT, () => {
  console.log(`SERVER STARTED. LISTENING TO PORT ${PORT}`);
});
