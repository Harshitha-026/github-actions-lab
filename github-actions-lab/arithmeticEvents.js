const EventEmitter = require('events');

// Create an instance of EventEmitter
const calculator = new EventEmitter();

// Arithmetic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? null : a / b);

// Event listeners
calculator.on('add', (a, b) => {
    console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
});
calculator.on('subtract', (a, b) => {
    console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
});
calculator.on('multiply', (a, b) => {
    console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
});
calculator.on('divide', (a, b) => {
    const result = divide(a, b);
    if (result === null) {
        console.log('Error: Division by zero.');
    } else {
        console.log(`Division: ${a} / ${b} = ${result}`);
    }
});

// Emit events
calculator.emit('add', 10, 5);
calculator.emit('subtract', 10, 5);
calculator.emit('multiply', 10, 5);
calculator.emit('divide', 10, 5);
calculator.emit('divide', 10, 0);

// Export functions for testing
module.exports = { add, subtract, multiply, divide };
