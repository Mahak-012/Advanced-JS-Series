// ─────────────────────────────────────────
// Day 2 — async / await + try/catch
// Mahak's Advanced JS Series
// ─────────────────────────────────────────

// async function ALWAYS returns a Promise
// await pauses until Promise settles

async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("👤 User:", data.name);
        return data;

    } catch (error) {
        console.error("❌ Failed:", error.message);

    } finally {
        console.log("🔁 Cleanup — always runs");
    }
}

getUser();