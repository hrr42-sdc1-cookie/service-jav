const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const overviewDAO = require('./db/overviewDAO.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/restaurant/:restaurantId', (req, res) => {
  let id = req.params.restaurantId;
  console.log('id = ', id);
  overviewDAO.fetchById(id)
    .then(overview => {
      res.json(overview);
    },
    () => res.status(500).send('Internal error!'));
});

module.exports = app;