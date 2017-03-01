[
  ['jslength', require('./jslength')],
  ['jsmap', require('./jsmap')],
  ['qselectmany', require('./qselectmany')],
  ['jssome-pes', require('./jssome-pes')],
  ['jssome-op', require('./jssome-op')],
  ['jsevery-pes', require('./jsevery-pes')],
  ['jsevery-op', require('./jsevery-op')]
].forEach(reg => {
  const name = reg[0], suiteFactory = reg[1];
  console.log(`[${name}]`);
  suiteFactory()
    .on('cycle', (event) => console.log(String(event.target)))
    .on('error', (event) => console.error(event.target.error))
    .on('complete', function(event) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
  console.log('');
});