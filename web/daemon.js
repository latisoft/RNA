
process.on('command', function(cmd) {
  console.log('Daemon got command:', cmd.hello);

});
process.send({status: 'ok', value: sts});

console.log('Daemon Server (ms): ', interval);