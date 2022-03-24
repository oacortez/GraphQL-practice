const express = require("express");
const app = express();
const PORT = 4000;
const userData = require("./MOCK_DATA.json");

app.listen(PORT, () => {
  console.log('Your server is running!');
});