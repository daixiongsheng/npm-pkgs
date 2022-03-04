const consola = require('consola');

consola.level = consola.LogLevel.trace;
consola.fatal(new Error('fatal message'));
consola.error(new Error('error message'));
consola.warn(new Error('warn message'));
consola.log('log', 'message');
consola.start('start', 'message');
consola.success('success', 'message');
consola.info('info', 'message');

consola.ready('ready', 'message');
consola.debug('debug', 'message');
consola.trace('trace', 'message');
