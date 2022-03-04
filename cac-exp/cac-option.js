// cac-option.js
const cli = require('cac')('MyCli');

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
});

cli.option('--name <name>', 'Provide your name');

cli.help();
cli.version('0.0.1');
const { options, args } = cli.parse();

console.log('name:', options.name);
console.log('type:', options.type);
console.log('args:', args);
