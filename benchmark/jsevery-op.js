require('../es6/prototype');
const { Suite } = require('benchmark');
const data = require('./data.json');

module.exports = () =>
  new Suite()
    .add('every', () => data.every(x => x.airtime === "21:00"))
    .add('qAll', () => data.qAll(x => x.airtime === "21:00"));
