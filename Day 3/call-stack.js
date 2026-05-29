// ─────────────────────────────────────────
// Day 3 — Call Stack
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Call Stack → LIFO (Last In First Out)
// JavaScript is SINGLE THREADED — one thing at a time!

function greet() {
    console.log("👋 Hello from greet!");
}

function sayName() {
    console.log("💁‍♀️ My name is Mahak!");
    greet(); // greet() pushed on top of stack
}

function start() {
    console.log("🚀 Start!");
    sayName(); // sayName() pushed on stack
    console.log("✅ End!");
}

start();

// ─────────────────────────────────────────
// Output Order — Call Stack LIFO:
// 🚀 Start!
// 💁‍♀️ My name is Mahak!
// 👋 Hello from greet!
// ✅ End!
// ─────────────────────────────────────────

// Stack Overflow — too many function calls!
// function infinite() { infinite() } // ❌ never do this!