// ─────────────────────────────────────────
// Day 2 — Promise.race & Promise.any
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Promise.race → first to SETTLE wins (resolve or reject)
const fast = new Promise(resolve =>
    setTimeout(() => resolve("🏆 Fast wins!"), 1000)
);
const slow = new Promise(resolve =>
    setTimeout(() => resolve("🐢 Slow loses"), 3000)
);

Promise.race([fast, slow])
    .then(result => console.log("⚡ Race winner:", result));
// Output: Fast wins! (after 1 second)

// Promise.any → first to FULFILL wins (ignores rejections)
Promise.any([
    Promise.reject("API 1 failed ❌"),
    Promise.resolve("API 2 success ✅"),
    Promise.reject("API 3 failed ❌"),
]).then(result => console.log("✅ Any result:", result));
// Output: API 2 success