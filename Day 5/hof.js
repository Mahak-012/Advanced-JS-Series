
// Day 5 — Higher Order Functions (HOF)
// Mahak's Advanced JS Series
// Higher Order Function = a function that:
// 1. Takes another function as an argument, OR
// 2. Returns another function

// ========== map() ==========
// Transform every element in an array
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log("✅ map()   :", doubled);
// Output: [2, 4, 6, 8, 10]

// ========== filter() ==========
// Keep only elements that match a condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("✅ filter():", evens);
// Output: [2, 4]

// ========== reduce() ==========
// Reduce entire array down to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("✅ reduce():", sum);
// Output: 15

// ========== Chaining ==========
// map + filter + reduce all together!
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter(n => n % 2 === 0)    // keep even numbers
    .map(n => n * n)              // square each one
    .reduce((acc, n) => acc + n, 0); // sum them all

console.log("🔗 Chained:", result);
// Output: 220 (4 + 16 + 36 + 64 + 100)