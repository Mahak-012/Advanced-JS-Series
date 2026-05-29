// ─────────────────────────────────────────
// Day 3 — Event Loop & Web APIs
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Event Loop Order:
// 1. Call Stack     → runs first (synchronous code)
// 2. Microtask Queue → Promises, queueMicrotask()
// 3. Macrotask Queue → setTimeout, setInterval

console.log("1️⃣ Start");                    // Call Stack — runs first

setTimeout(() => {
    console.log("4️⃣ setTimeout");           // Macrotask Queue — runs last
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3️⃣ Promise .then()");  // Microtask Queue — runs before setTimeout
    });

queueMicrotask(() => {
    console.log("3️⃣ queueMicrotask");       // Microtask Queue — same level as Promise
});

console.log("2️⃣ End");                      // Call Stack — runs second

// ─────────────────────────────────────────
// Output Order:
// 1️⃣ Start
// 2️⃣ End
// 3️⃣ Promise .then()
// 3️⃣ queueMicrotask
// 4️⃣ setTimeout
// ─────────────────────────────────────────