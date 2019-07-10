const fib = (num) => {
  if (num <= 1) return 0;

  let temp = 1;
  let prev = 0;
  let result = 0;

  for (let i = 1; i < num; i += 1) {
    prev = temp;
    temp = result;
    result = temp + prev;
  }

  return result;
};

console.log(fib(2)); // => 1
console.log(fib(3)); // => 1
console.log(fib(4)); // => 2
console.log(fib(5)); // => 3
console.log(fib(6)); // => 5
console.log(fib(16)); // => 610\

// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
const fibonacci = (num, memo) => {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonacci(2)); // => 1
console.log(fibonacci(3)); // => 1
console.log(fibonacci(4)); // => 2
console.log(fibonacci(5)); // => 3
console.log(fibonacci(6)); // => 5
console.log(fibonacci(16)); // => 610