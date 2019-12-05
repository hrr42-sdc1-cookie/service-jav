const express = require('express');
const bodyParser = require('body-parser');

const overviewDAO = require('./db/overviewDAO.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/restaurant/:restaurantId', (req, res) => {
  let id = req.params.restaurantId;
  overviewDAO.fetchById(id)
    .then(overview => {
      res.json(overview);
    },
    () => res.status(500).send('Internal error!'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
