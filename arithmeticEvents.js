const EventEmitter = require('events');

// Create an instance of EventEmitter
const calculator = new EventEmitter();

// Define event listeners for arithmetic operations
const add = (a, b) => console.log(`Addition: ${a} + ${b} = ${a + b}`);
const subtract = (a, b) => console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
const multiply = (a, b) => console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
const divide = (a, b) => {
    if (b === 0) {
        console.log('Error: Division by zero is not allowed.');
    } else {
        console.log(`Division: ${a} / ${b} = ${a / b}`);
    }
};

// Register events
calculator.on('add', add);
calculator.on('subtract', subtract);
calculator.on('multiply', multiply);
calculator.on('divide', divide);

// Emit events to perform calculations
calculator.emit('add', 10, 5);
calculator.emit('subtract', 10, 5);
calculator.emit('multiply', 10, 5);
calculator.emit('divide', 10, 5);
calculator.emit('divide', 10, 0);  // Demonstrate division by zero case

// Removing the 'multiply' event listener
calculator.removeListener('multiply', multiply);
console.log('Multiplication event listener removed.');

// Emit events again after removing the multiply listener
calculator.emit('multiply', 10, 5); // This won't work since it's removed

// Display registered event names
console.log('Active events:', calculator.eventNames());
