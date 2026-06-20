// ─────────────────────────────────────────
// Day 7 — Closures & Lexical Scope
// ─────────────────────────────────────────

// A closure = a function that REMEMBERS
// the variables from its outer scope
// even after that outer function has returned!

// ========== Basic Closure ==========
function outer() {
    const message = "Hello from outer!"; // outer variable

    function inner() {
        console.log("✅ Inner sees:", message); // inner remembers!
    }

    return inner;
}

const myFunc = outer(); // outer() has returned
myFunc(); // but inner still remembers message!
// Output: Hello from outer!

console.log("─────────────────────────────");

// ========== Counter — Classic Closure Example ==========
function createCounter() {
    let count = 0; // private variable!

    return {
        increment() { count++; console.log("➕ Count:", count); },
        decrement() { count--; console.log("➖ Count:", count); },
        getCount()  { return count; }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
counter.decrement(); // 2
console.log("✅ Final count:", counter.getCount()); // 2

// count is PRIVATE — not accessible from outside!
// console.log(count); // ❌ ReferenceError!

console.log("─────────────────────────────");

// ========== Each closure has its OWN scope ==========
function makeMultiplier(x) {
    return function(y) {
        return x * y; // x is remembered from outer scope!
    };
}

const double  = makeMultiplier(2);
const triple  = makeMultiplier(3);
const times10 = makeMultiplier(10);

console.log("✅ double(5)  :", double(5));   // 10
console.log("✅ triple(5)  :", triple(5));   // 15
console.log("✅ times10(5) :", times10(5));  // 50
// Each has its OWN x — they don't share!