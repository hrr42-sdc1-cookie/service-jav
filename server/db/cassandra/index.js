const cassandra = require('cassandra-driver');
const contactpoint = '127.0.0.1' || awsIp

const client = new cassandra.Client({
  contactPoints: [contactpoint],
  localDataCenter: 'datacenter1',
  keyspace: 'javOpenTable',
  pooling: {
    maxRequestsPerConnection: 32768,
  }
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Cassandra connected');

  }
});

module.exports = client;