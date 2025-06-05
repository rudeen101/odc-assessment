const express = require("express");
const app = express();
const cors = require('cors');

var bodyParser = require('body-parser');

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

const port = 3000;

app.get("/api/businesses", (req, res) => {
  res.send({
    "Tailoring": "Lorem ipsom",
    "Mechanics": "Lorem ipsom",
    "Salon": "Lorem ipsom",

});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});