
// Day 6 — Destructuring & Spread/Rest

// ========== Array Destructuring ==========
const colors = ["pink", "purple", "white"];

const [first, second, third] = colors;
console.log("✅ Array destructuring:", first, second, third);
const [, , last] = colors;
console.log("✅ Skip elements:", last);
// Output: white

// Default values
const [a = "red", b = "blue", c, d = "green"] = colors;
console.log("✅ Default values:", a, b, c, d);
// Swap variables — no temp variable needed!
let x = 1, y = 2;
[x, y] = [y, x];
console.log("✅ Swap:", x, y);
// Output: 2 1

console.log("─────────────────────────────");

// ========== Object Destructuring ==========
const user = {
    name: "Mahak",
    age: 22,
    role: "Frontend Developer",
    city: "Lahore"
};

// Basic
const { name, role } = user;
console.log("✅ Object destructuring:", name, role);

// Rename while destructuring
const { name: devName, city: location } = user;
console.log("✅ Renamed:", devName, location);

// Default values
const { name: n, salary = "negotiable" } = user;
console.log("✅ Default:", n, salary);

// Nested destructuring
const dev = {
    info: {
        name: "Mahak",
        stack: { frontend: "React", styling: "Tailwind" }
    }
};

const { info: { name: devN, stack: { frontend, styling } } } = dev;
console.log("✅ Nested:", devN, frontend, styling);

console.log("─────────────────────────────");

// ========== Spread Operator ==========
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("✅ Spread arrays:", combined);

// Objects
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "ur", fontSize: 16 };
const merged = { ...defaults, ...userPrefs };
console.log("✅ Spread objects:", merged);
// userPrefs overrides defaults

// ========== Rest Operator ==========
function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log("✅ Rest params:", sum(1, 2, 3, 4, 5));
// Output: 15

const [head, ...tail] = [10, 20, 30, 40];
console.log("✅ Rest in array:", head, tail);
// Output: 10 [20, 30, 40]

const { name: nm, ...rest } = user;
console.log("✅ Rest in object:", nm, rest);