// ─────────────────────────────────────────
// Day 7 — Closures in Real World
// ─────────────────────────────────────────

// ========== 1. Data Privacy / Encapsulation ==========
function createBankAccount(initialBalance) {
    let balance = initialBalance; // PRIVATE — no direct access!

    return {
        deposit(amount) {
            if (amount <= 0) return console.log("❌ Invalid amount!");
            balance += amount;
            console.log(`✅ Deposited ${amount}. Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) return console.log("❌ Insufficient funds!");
            balance -= amount;
            console.log(`✅ Withdrew ${amount}. Balance: ${balance}`);
        },
        getBalance() {
            console.log(`💰 Current balance: ${balance}`);
            return balance;
        }
    };
}

const account = createBankAccount(1000);
account.deposit(500);    // Balance: 1500
account.withdraw(200);   // Balance: 1300
account.getBalance();    // 1300
// account.balance      // ❌ undefined — balance is private!

console.log("─────────────────────────────");

// ========== 2. Memoization with Closure ==========
// Cache expensive function results!
function memoize(fn) {
    const cache = {}; // closure keeps cache alive!

    return function(n) {
        if (cache[n] !== undefined) {
            console.log(`⚡ Cache hit for ${n}!`);
            return cache[n];
        }
        console.log(`🔄 Computing for ${n}...`);
        cache[n] = fn(n);
        return cache[n];
    };
}

function slowSquare(n) {
    return n * n;
}

const fastSquare = memoize(slowSquare);
console.log("✅", fastSquare(5));  // Computing... 25
console.log("✅", fastSquare(5));  // Cache hit! 25
console.log("✅", fastSquare(10)); // Computing... 100
console.log("✅", fastSquare(10)); // Cache hit! 100

console.log("─────────────────────────────");

// ========== 3. Event Handlers with Closure ==========
function makeButton(buttonName) {
    let clickCount = 0; // private to each button!

    return function onClick() {
        clickCount++;
        console.log(`🖱️ ${buttonName} clicked ${clickCount} time(s)`);
    };
}

const loginBtn  = makeButton("Login");
const signupBtn = makeButton("Signup");

loginBtn();  // Login clicked 1 time(s)
loginBtn();  // Login clicked 2 time(s)
signupBtn(); // Signup clicked 1 time(s)
loginBtn();  // Login clicked 3 time(s)
// Each button has its OWN clickCount!

console.log("─────────────────────────────");

// ========== 4. Partial Application with Closure ==========
function multiply(a, b) {
    return a * b;
}

function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

const multiplyBy3 = partial(multiply, 3);
const multiplyBy5 = partial(multiply, 5);

console.log("✅ multiplyBy3(4):", multiplyBy3(4)); // 12
console.log("✅ multiplyBy5(4):", multiplyBy5(4)); // 20