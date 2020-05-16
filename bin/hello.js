#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('hello', 'Say hello')
    .example('$0 hello -f raryson -l rost', 'say hello to entire name')
    .describe('f', 'First Name')
    .describe('l', 'Last Name')
    .demandOption(['f', 'l'])
    .help('h')
    .alias('h', 'help')
    .argv;

console.log(`Hello ${argv.f} ${argv.l}`)