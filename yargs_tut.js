const app = require("express");
const yargs = require('yargs').argv;

console.log('starting App');
console.log(process.argv);
var command = process.argv[2];
console.log('Command', command);
console.log('Process', process.argv);
if (command === 'add') {
    console.log('Adding new Note');
} else if (command === 'list') {
    console.log('Listing all Notes');
} else if (command === 'read') {
    console.log('Reading Note');
} else {
    console.log('command not reccognized')
}