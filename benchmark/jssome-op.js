require('../es6/prototype');
const { Suite } = require('benchmark');
const data = require('./data.json');

module.exports = () =>
  new Suite()
    .add('some', () => data.some(x => x.season === 1))
    .add('qAny', () => data.qAny(x => x.season === 1));
