// ─────────────────────────────────────────
// Day 6 — Optional Chaining & Nullish
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// ========== Optional Chaining (?.) ==========
// Access deeply nested properties safely
// No more "Cannot read property of undefined" errors!

const developer = {
    name: "Mahak",
    skills: {
        frontend: ["React", "Tailwind"],
        backend: null
    },
    getRole() {
        return "Frontend Developer";
    }
};

// Without optional chaining — crashes!
// console.log(developer.skills.backend.name); // ❌ Error!

// With optional chaining — safe!
console.log("✅ Optional chain:", developer.skills.backend?.name);
// Output: undefined (no crash!)

console.log("✅ Method call:", developer.getRole?.());
// Output: Frontend Developer

console.log("✅ Missing method:", developer.getSalary?.());
// Output: undefined (no crash!)

// Array optional chaining
const arr = null;
console.log("✅ Array:", arr?.[0]);
// Output: undefined

// Deep nesting
const config = {
    api: {
        endpoints: {
            user: "/api/user"
        }
    }
};

console.log("✅ Deep:", config?.api?.endpoints?.user);
// Output: /api/user
console.log("✅ Missing:", config?.db?.host);
// Output: undefined

console.log("─────────────────────────────");

// ========== Nullish Coalescing (??) ==========
// Returns RIGHT side only when LEFT is null or undefined
// NOT when it's 0, false, or ""

const username = null;
const displayName = username ?? "Anonymous";
console.log("✅ Nullish:", displayName);
// Output: Anonymous

// Difference from || (OR)
const score = 0;
console.log("✅ OR (||):", score || "No score");    // No score (wrong!)
console.log("✅ Nullish (??):", score ?? "No score"); // 0 (correct!)

const isActive = false;
console.log("✅ OR:", isActive || "inactive");     // inactive (wrong!)
console.log("✅ Nullish:", isActive ?? "inactive"); // false (correct!)

// ??= (Nullish assignment)
let nickname = null;
nickname ??= "Dev";
console.log("✅ Nullish assign:", nickname);
// Output: Dev

// Combine with optional chaining
const apiResponse = null;
const data = apiResponse?.data?.user ?? "No user found";
console.log("✅ Combined:", data);
// Output: No user found