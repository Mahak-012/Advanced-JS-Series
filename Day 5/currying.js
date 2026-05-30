// ─────────────────────────────────────────
// Day 5 — Currying
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Currying = transforming f(a, b) into f(a)(b)
// Each function takes ONE argument and returns another function

// ========== Basic Currying ==========
const add = a => b => a + b;

console.log("✅ add(2)(3)    :", add(2)(3));    // 5
console.log("✅ add(10)(20)  :", add(10)(20));  // 30

// Reusable partial application!
const add10 = add(10);
console.log("✅ add10(5)     :", add10(5));     // 15
console.log("✅ add10(20)    :", add10(20));    // 30

// ========== Real World Example ==========
const multiply = a => b => a * b;

const double  = multiply(2);
const triple  = multiply(3);
const times10 = multiply(10);

console.log("─────────────────────────────");
console.log("✅ double(5)   :", double(5));    // 10
console.log("✅ triple(5)   :", triple(5));    // 15
console.log("✅ times10(5)  :", times10(5));   // 50

// ========== Currying with 3 arguments ==========
const greet = greeting => name => role =>
    `${greeting}, ${name}! You are a ${role}.`;

console.log("─────────────────────────────");
console.log("✅", greet("Hello")("Mahak")("Frontend Developer"));
// Output: Hello, Mahak! You are a Frontend Developer.

// Reuse with partial application!
const sayHello   = greet("Hello");
const helloMahak = sayHello("Mahak");

console.log("✅", helloMahak("React Developer"));
console.log("✅", helloMahak("Frontend Engineer"));S