const Spin = require('light-spinner').default;
const spin = new Spin({
  text: 'starting',
});
spin.start();

setTimeout(() => {
  spin.text = 'started';

  setTimeout(() => {
    spin.stop();
  }, 2000);
}, 2000);
