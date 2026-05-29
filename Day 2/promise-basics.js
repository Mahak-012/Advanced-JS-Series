// ─────────────────────────────────────────
// Day 2 — Promises Basics
// Mahak's Advanced JS Series
// ─────────────────────────────────────────
// Promise States:
// Pending   → waiting
// Fulfilled → resolve() called ✅
// Rejected  → reject() called ❌

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Done! Promise fulfilled ✅");
    } else {
        reject("Failed! Promise rejected ❌");
    }
});

myPromise
    .then(result  => console.log("✅ Resolved:", result))
    .catch(error  => console.error("❌ Rejected:", error))
    .finally(()   => console.log("🔁 Always runs!"));