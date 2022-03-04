const addHook = require('pirates').addHook;

function matcher(filename) {
  return true;
}

const revert = addHook(
  (code, filename) => code.replace(/@@foo/g, "console.log('foo');"),
  { exts: ['.js'], matcher },
);
const add = require('./add');

// revert();
