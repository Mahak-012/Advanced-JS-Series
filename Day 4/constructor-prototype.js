
// Day 4 — Constructor Functions & Prototype
// Mahak's Advanced JS Series
// ========== Constructor Function ==========
function Person(name, age) {
    this.name = name; // own property
    this.age  = age;  // own property
}
// Add methods to prototype — shared by ALL instances
// NOT copied into each object — saves memory! 
Person.prototype.greet = function() {
    console.log(`👋 Hi! I'm ${this.name}, ${this.age} years old.`);
};

Person.prototype.introduce = function() {
    console.log(`💼 I'm a frontend developer!`);
};

const mahak  = new Person("Mahak", 22);
const ali    = new Person("Ahmad", 25);

mahak.greet();     //  Hi! I'm Mahak, 22 years old.
ali.greet();       //  Hi! I'm Ali, 25 years old.
mahak.introduce(); //  I'm a frontend developer!

console.log("─────────────────────────────");

// Both share the SAME greet function — not copied!
console.log(
    "Same greet?",
    mahak.greet === ali.greet // true — shared via prototype!
);
// ========== new keyword — what happens? ==========
// 1. Creates empty object {}
// 2. Sets __proto__ to Person.prototype
// 3. Runs constructor with this = new object
// 4. Returns the object

console.log("─────────────────────────────");
console.log(mahak.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null — end of chain!