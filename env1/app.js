const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello, world! ${process.env.KIKILA}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
