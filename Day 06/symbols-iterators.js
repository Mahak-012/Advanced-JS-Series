// ─────────────────────────────────────────
// Day 6 — Symbols, Iterators & for...of
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// ========== Symbols ==========
// Unique, immutable primitive values
// Great for object property keys — no collisions!

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log("✅ Symbols equal?", id1 === id2);
// Output: false — always unique!

const user = {
    name: "Mahak",
    [id1]: 12345,    // hidden from normal iteration
    [id2]: 99999,
};

console.log("✅ Symbol property:", user[id1]);
// Output: 12345
console.log("✅ Keys (no symbols):", Object.keys(user));
// Output: ['name'] — symbols hidden!

// Well-known symbols
const customArr = {
    data: ["React", "Tailwind", "Next.js"],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.data[index++],
                done: index > this.data.length
            })
        };
    }
};

console.log("─────────────────────────────");

// ========== for...of ==========
// Works with any iterable — arrays, strings, maps, sets, custom!

// Array
for (const skill of ["React", "Next.js", "Tailwind"]) {
    console.log("✅ Skill:", skill);
}

// String
for (const char of "Mahak") {
    process.stdout.write(char + " ");
}
console.log();

// Custom iterator
for (const tech of customArr) {
    console.log("✅ Custom iter:", tech);
}

// ========== Map & Set ==========
const skillSet = new Set(["React", "JS", "React", "CSS", "JS"]);
console.log("─────────────────────────────");
console.log("✅ Set (no duplicates):", [...skillSet]);
// Output: ['React', 'JS', 'CSS']

const skillMap = new Map();
skillMap.set("React", "Advanced");
skillMap.set("Next.js", "Intermediate");
skillMap.set("TypeScript", "Learning");

for (const [skill, level] of skillMap) {
    console.log(`✅ ${skill}: ${level}`);
}