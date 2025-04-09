const { add, subtract, multiply, divide } = require('../arithmeticEvents');

test('adds numbers correctly', () => {
    expect(add(10, 5)).toBe(15);
});

test('subtracts numbers correctly', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('multiplies numbers correctly', () => {
    expect(multiply(10, 5)).toBe(50);
});

test('divides numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
});

test('division by zero returns null', () => {
    expect(divide(10, 0)).toBeNull();
});
