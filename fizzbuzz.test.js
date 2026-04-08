const fizzbuzz = require('./fizzbuzz');

test('kelipatan 3 harus Fizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test('kelipatan 5 harus Buzz', () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test('kelipatan 3 dan 5 harus FizzBuzz', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test('angka biasa jadi string', () => {
  expect(fizzbuzz(2)).toBe("2");
});