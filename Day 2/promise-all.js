// ─────────────────────────────────────────
// Day 2 — Promise.all & Promise.allSettled
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Promise.all → all must resolve, one fail = all fail
Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30),
]).then(values => console.log("✅ Promise.all:", values));
// Output: [10, 20, 30]

// Promise.allSettled → never throws, returns all results
Promise.allSettled([
    Promise.resolve(100),
    Promise.reject("Error ❌"),
    Promise.resolve(300),
]).then(results => {
    results.forEach((r, i) => {
        r.status === "fulfilled"
            ? console.log(`✅ p${i + 1}:`, r.value)
            : console.log(`❌ p${i + 1}:`, r.reason);
    });
});