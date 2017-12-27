const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
var logger = require("morgan");


var PORT = process.env.PORT || 8080;
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', (req, res) => res.send('Hello UI world'));
app.get('/api', (req, res) => res.send('Hello backend world!'));

mongoose.Promise = Promise;
mongoose.set('debug', true);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/strimko";

mongoose.connect('mongodb://localhost/strimko', {
  useMongoClient: true
});

// Import routes and give the server access to them.
var routes = require("../controllers/strimkoController.js");
app.use("/", routes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
