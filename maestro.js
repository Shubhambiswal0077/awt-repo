
const EventEmitter = require("events");


const eventEmitter = new EventEmitter();


const eventCount = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0
};



eventEmitter.on("user-login", (username) => {
  eventCount["user-login"]++;
  console.log(` User logged in: ${username}`);
});

eventEmitter.on("user-logout", (username) => {
  eventCount["user-logout"]++;
  console.log(` User logged out: ${username}`);
});

eventEmitter.on("user-purchase", (username, item) => {
  eventCount["user-purchase"]++;
  console.log(` ${username} purchased ${item}`);
});

eventEmitter.on("profile-update", (username, field) => {
  eventCount["profile-update"]++;
  console.log(` ${username} updated ${field}`);
});


eventEmitter.on("summary", () => {
  console.log("\n EVENT SUMMARY REPORT");
  for (let event in eventCount) {
    console.log(`${event} → ${eventCount[event]} times`);
  }
});



eventEmitter.emit("user-login", "Shubham");
eventEmitter.emit("user-login", "Amit");

eventEmitter.emit("user-purchase", "Shubham", "Laptop");
eventEmitter.emit("user-purchase", "Amit", "Headphones");

eventEmitter.emit("profile-update", "Shubham", "Profile Picture");

eventEmitter.emit("user-logout", "Amit");
eventEmitter.emit("user-logout", "Shubham");


eventEmitter.emit("summary");
