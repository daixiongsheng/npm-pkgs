const jiti = require('jiti')();
const unregister = jiti.register();
const { add } = require('./add');

console.log(add(1, 2));
