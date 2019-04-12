const path = require('path');
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT);
