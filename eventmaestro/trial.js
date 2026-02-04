const EventMaestro = require("./app");

const maestro = new EventMaestro();

// ========== EVENT LISTENERS ==========

// User Login Event
maestro.on("user-login", (data) => {
  console.log(`✓ User logged in: ${data.username}`);
});

// User Logout Event
maestro.on("user-logout", (data) => {
  console.log(`✓ User logged out: ${data.username}`);
});

// User Purchase Event
maestro.on("user-purchase", (data) => {
  console.log(`✓ Purchase completed: ${data.username} bought ${data.item}`);
});

// Profile Update Event
maestro.on("profile-update", (data) => {
  console.log(`✓ Profile updated: ${data.username} - ${data.change}`);
});

// Summary Event
maestro.on("summary", () => {
  maestro.summarizeEvents();
});

// ========== EMIT EVENTS ==========

console.log("Starting Event Maestro...\n");

// Emit user-login events
maestro.trackEvent("user-login", { username: "john_doe" });
maestro.trackEvent("user-login", { username: "jane_smith" });

// Emit user-purchase events
maestro.trackEvent("user-purchase", { username: "john_doe", item: "Laptop" });
maestro.trackEvent("user-purchase", { username: "jane_smith", item: "Phone" });
maestro.trackEvent("user-purchase", { username: "john_doe", item: "Headphones" });

// Emit profile-update events
maestro.trackEvent("profile-update", { username: "jane_smith", change: "Updated bio" });
maestro.trackEvent("profile-update", { username: "john_doe", change: "Changed avatar" });

// Emit user-logout events
maestro.trackEvent("user-logout", { username: "john_doe" });
maestro.trackEvent("user-logout", { username: "jane_smith" });

// Emit summary event
maestro.trackEvent("summary", {});