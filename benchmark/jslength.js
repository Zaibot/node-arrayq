require('../es6/prototype');
const { Suite } = require('benchmark');
const data = require('./data.json');

module.exports = () =>
  new Suite()
    .add('length === 0', () => data.length === 0)
    .add('qEmpty', () => data.qEmpty());
