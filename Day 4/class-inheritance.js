
// Day 4 — ES6 Classes & Inheritance
// Mahak's Advanced JS Series
// Classes are just SYNTACTIC SUGAR over prototype chain!
// Under the hood — same prototype mechanism 

// ========== Base Class ==========
class Animal {
    constructor(name, sound) {
        this.name  = name;
        this.sound = sound;
    }

    speak() {
        console.log(`🔊 ${this.name} says: ${this.sound}!`);
    }

    eat() {
        console.log(`🍖 ${this.name} is eating!`);
    }
}

// ========== Inheritance with extends ==========
class Dog extends Animal {
    constructor(name) {
        super(name, "Woof"); // calls Animal constructor
        this.tricks = [];
    }

    learnTrick(trick) {
        this.tricks.push(trick);
        console.log(`🎓 ${this.name} learned: ${trick}!`);
    }

    showTricks() {
        console.log(`🐶 ${this.name}'s tricks:`, this.tricks);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
    }

    purr() {
        console.log(`😸 ${this.name} is purring... purrr`);
    }
}

// ========== Using our classes ==========
const dog = new Dog("Bruno");
const cat = new Cat("Whiskers");

dog.speak();             // inherited from Animal 
dog.eat();               // inherited from Animal 
dog.learnTrick("sit");   // own method 
dog.learnTrick("shake"); // own method 
dog.showTricks();        // own method 

console.log("─────────────────────────────");

cat.speak(); // inherited from Animal 
cat.purr();  // own method 

console.log("─────────────────────────────");

// ========== instanceof check ==========
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true — because of prototype chain!
console.log(cat instanceof Dog);    // false

// ========== Classes are still prototypes! ==========
console.log(Dog.prototype.__proto__ === Animal.prototype); // true!
// This proves classes are just syntactic sugar 