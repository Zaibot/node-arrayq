require('../es6/prototype');
const { Suite } = require('benchmark');
const data = require('./data.json');

module.exports = () =>
  new Suite()
    .add('map', () => data.map(x => x._links))
    .add('qSelect', () => data.qSelect(x => x._links));
