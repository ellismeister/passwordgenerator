// @ts-nocheck
const program = require('commander');

program.version('1.0.0').description('CLI Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers from password')
  .option('-ns, --no-symbols', 'remove symbols from password')
  .parse();

console.log(program.opts());
