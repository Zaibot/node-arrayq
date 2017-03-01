require('../es6/prototype');
const { Suite } = require('benchmark');
const data = require('./data.json');
const links = data.qSelect(x => x._links);

module.exports = () =>
  new Suite()
    .add('qMapMany()', () => links.qMapMany())
    .add('qMapMany(_links)', () => data.qMapMany(x => x._links));
