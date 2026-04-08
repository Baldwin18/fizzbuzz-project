const { fibonacci, fibonacci_sequence } = require('./fibonacci');

test('fibonacci dasar', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
});

test('fibonacci angka lain', () => {
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(7)).toBe(13);
});

test('fibonacci negatif', () => {
  expect(fibonacci(-1)).toBe("ERROR");
});

test('fibonacci_sequence', () => {
  expect(fibonacci_sequence(8)).toEqual([0,1,1,2,3,5,8,13]);
});

test('fibonacci_sequence negatif', () => {
  expect(fibonacci_sequence(-5)).toBe("ERROR");
});