require('../es6/prototype');
const { Suite } = require('benchmark');
const data = require('./data.json');

module.exports = () =>
  new Suite()
    .add('every', () => data.every(x => x.season === 1))
    .add('qAll', () => data.qAll(x => x.season === 1));
