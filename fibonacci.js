function fibonacci(n) {
  if (n < 0) return "ERROR";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

function fibonacci_sequence(n) {
  if (n < 0) return "ERROR";

  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(fibonacci(i));
  }

  return result;
}

module.exports = { fibonacci, fibonacci_sequence };