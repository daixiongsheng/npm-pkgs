const detect = require('detect-port');

(async () => {
  const port = await detect(3307);
  console.log('可用端口:', port);
})();
