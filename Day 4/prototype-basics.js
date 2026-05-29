
// Day 4 — Prototype Chain Basics    Mahak's Advanced JS Series
// Every object in JavaScript has a hidden property
// called __proto__ which links to another object     That chain is called the PROTOTYPE CHAIN!
// ========== Object.create() ==========
const animal = {
    eat() {
        console.log(`🍖 ${this.name} is eating!`);
    },
    sleep() {
        console.log(`😴 ${this.name} is sleeping!`);
    }
};

const dog = Object.create(animal); // dog inherits from animal
dog.name = "Bruno";
dog.bark = function() {
    console.log(`🐶 ${this.name} says: Woof!`);
};

dog.eat();   // inherited from animal 
dog.bark();  // own method 
dog.sleep(); // inherited from animal 

console.log("─────────────────────────────");

// ========== Prototype Chain Lookup ==========
// JS looks for property in this order:
// 1. Own object → 2. __proto__ → 3. __proto__.__proto__ → null

console.log(dog.hasOwnProperty("name")); // true  — own property
console.log(dog.hasOwnProperty("eat"));  // false — inherited!

console.log("🔗 dog.__proto__ === animal:", dog.__proto__ === animal);
// true — dog's prototype IS animal!