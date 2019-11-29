const Overview = require('../models/restaurant-overview.js');

let fetchById = (_id) => {
  return new Promise((resolve, reject) => {
    Overview.findById(_id, (err, overview) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(overview);
      }
    });
  });
};

module.exports.fetchById = fetchById;