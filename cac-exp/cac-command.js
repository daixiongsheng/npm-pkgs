const cli = require('cac')('MyCli');

cli
  .command('rm <dir>', 'Remove a dir')
  .option('--name <name>', 'Provide your name')
  .action((dir, options) => {
    console.log('remove ', dir);
    console.log('options ', options);
  });
cli
  .command('build <entry1> <entry2> [...otherFiles]', 'Remove a dir')
  .option('--name <name>', 'Provide your name')
  .action((entry1, entry2, otherFiles, options) => {
    console.log('entry1 ', entry1);
    console.log('entry2 ', entry2);
    console.log('otherFiles ', otherFiles);
    console.log('options ', options);
  });

cli.help();
cli.version('0.0.1');
cli.parse();
