// @ts-nocheck
const program = require('commander');
const chalk = require('chalk');
const log = console.log;
const createPassword = require('./utils/createPassword');

program.version('1.0.0').description('CLI Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers from password')
  .option('-ns, --no-symbols', 'remove symbols from password')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols);

// Output Generated Password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
