
// Day 5 — Function Composition
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// Function Composition = chain functions together
// output of one function becomes input of the next

// ========== Manual Composition ==========
const trim     = str => str.trim();
const toLower  = str => str.toLowerCase();
const addEmoji = str => `✨ ${str}`;

// Without composition — messy nested calls 
const result1 = addEmoji(toLower(trim("  MAHAK  ")));
console.log("Without compose:", result1);
// Output: ✨ mahak

// ========== compose() ==========
// Executes RIGHT to LEFT
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const transform = compose(addEmoji, toLower, trim);
console.log("✅ compose()   :", transform("  MAHAK  "));
// Output: ✨ mahak

// ========== pipe() ==========
// Executes LEFT to RIGHT — more readable!
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const process = pipe(trim, toLower, addEmoji);
console.log("✅ pipe()      :", process("  FRONTEND DEV  "));
// Output: ✨ frontend dev

console.log("─────────────────────────────");

// ========== Real World — Data Pipeline ==========
const users = [
    { name: "Mahak", age: 22, role: "Frontend Dev" },
    { name: "Ali",   age: 17, role: "Student" },
    { name: "Sara",  age: 25, role: "Backend Dev" },
    { name: "Umar",  age: 16, role: "Student" },
];

const getAdults = users => users.filter(u => u.age >= 18);
const getDevs   = users => users.filter(u => u.role.includes("Dev"));
const getNames  = users => users.map(u => u.name);

const getAdultDevs = pipe(getAdults, getDevs, getNames);

console.log("✅ Adult Devs:", getAdultDevs(users));
// Output: ['Mahak', 'Sara']