['jslength','jssome','jsmap','qselectmany','jsevery-pes','jsevery-op'].forEach(suite => {
  console.log(`[${suite}]`);
  require(`./${suite}`)()
    .on('cycle', (event) => console.log(String(event.target)))
    .on('error', (event) => console.error(event.target.error))
    .on('complete', function(event) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
  console.log('');
});