// ─────────────────────────────────────────
// Day 3 — Macrotask vs Microtask
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Microtasks  → Promises, queueMicrotask()  → HIGH priority
// Macrotasks  → setTimeout, setInterval     → LOW priority
// Rule: ALL microtasks finish BEFORE next macrotask runs!

console.log("🚀 Script Start");

// Macrotask 1
setTimeout(() => console.log("⏰ setTimeout 1"), 0);

// Macrotask 2
setTimeout(() => console.log("⏰ setTimeout 2"), 0);

// Microtask 1
Promise.resolve().then(() => console.log("✅ Promise 1"));

// Microtask 2
Promise.resolve().then(() => console.log("✅ Promise 2"));

console.log("🏁 Script End");

// ─────────────────────────────────────────
// Output Order — can you guess? 🤔
// 🚀 Script Start
// 🏁 Script End
// ✅ Promise 1       ← microtasks first!
// ✅ Promise 2       ← microtasks first!
// ⏰ setTimeout 1    ← macrotasks after!
// ⏰ setTimeout 2    ← macrotasks after!
// ─────────────────────────────────────────

// WHY? Event Loop rule:
// Call Stack empty → drain ALL microtasks → then ONE macrotask → repeat!