var argv = require('yargs').argv;

var operand1 = argv.op1 ? argv.op1 : argv.a;
var operand2 = argv.op2 ? argv.op2 : argv.b;
var operator = argv.opr ? argv.opr : argv.o;

if(!operand1 || !operand2 || !operator) {
    console.log('One or more arguments are not provided or are invalid');
    process.exit(1);
}

if(operator == '+') {
    answer = operand1 + operand2;
} else if(operator == '-') {
    answer = operand1 - operand2;
} else if(operator == '/') {
    answer = operand1 / operand2;
} else if(operand == '*') {
    answer = operand1 * operand2;
} else {
    console.log('Invalid Operator');
    process.exit(1);
}
console.log('Answer: ', answer);