#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const log = console.log;
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program
  .version('1.0.0')
  .description('CLI Password Generator (Built by Gaston Meister)');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers from password')
  .option('-ns, --no-symbols', 'remove symbols from password')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to clipboard
if (save) {
  savePassword(generatedPassword);
}

// Copy to Clipboard
clipboardy.writeSync(generatedPassword);

// Output Generated Password
log(
  chalk.hex('#0091ff').bold('Generated Password: ') +
    chalk.hex('#00ff66').bold(generatedPassword)
);

log(chalk.yellow('Password copied to clipboard'));
