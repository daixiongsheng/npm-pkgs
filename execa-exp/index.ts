import { execa } from 'execa';

(async () => {
  {
    const { stdout } = await execa('ls', ['-al', '.']);
    console.log(stdout);
  }
})();
