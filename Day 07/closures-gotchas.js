// ─────────────────────────────────────────
// Day 7 — Closure Gotchas & Fixes
// ─────────────────────────────────────────

// ========== Classic Loop Bug with var ==========
// WRONG — var does NOT create new scope per iteration!
console.log("❌ var in loop (WRONG):");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i); // prints 3, 3, 3 — NOT 0, 1, 2!
    }, 100);
}

// ✅ FIX 1 — use let (block scope)
setTimeout(() => {
    console.log("─────────────────────────────");
    console.log("✅ let in loop (CORRECT):");
    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            console.log("let j:", j); // 0, 1, 2 ✅
        }, 100);
    }
}, 200);

// ✅ FIX 2 — use IIFE (Immediately Invoked Function Expression)
setTimeout(() => {
    console.log("─────────────────────────────");
    console.log("✅ IIFE fix (CORRECT):");
    for (var k = 0; k < 3; k++) {
        (function(k) {
            setTimeout(() => {
                console.log("IIFE k:", k); // 0, 1, 2 ✅
            }, 100);
        })(k);
    }
}, 400);

// ========== Stale Closure ==========
setTimeout(() => {
    console.log("─────────────────────────────");
    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count; // always reads latest count ✅
    }

    increment();
    increment();
    increment();
    console.log("✅ Stale closure fix:", getCount()); // 3
}, 600);

// ========== IIFE — Immediately Invoked Function Expression ==========
setTimeout(() => {
    console.log("─────────────────────────────");

    const result = (function() {
        const privateData = "I am private!";
        return {
            getData: () => privateData
        };
    })(); // invoked immediately!

    console.log("✅ IIFE result:", result.getData());
    // Output: I am private!
}, 800);