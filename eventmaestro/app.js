const EventEmitter = require("events");

class EventMaestro extends EventEmitter {
  constructor() {
    super();
    this.eventCounts = {};
  }

  // Track event emissions
  trackEvent(eventType, args) {
    if (!this.eventCounts[eventType]) {
      this.eventCounts[eventType] = 0;
    }
    this.eventCounts[eventType]++;
    this.emit(eventType, args);
  }

  // Emit summary of all events
  summarizeEvents() {
    console.log("\n========== EVENT SUMMARY ==========");
    for (let event in this.eventCounts) {
      console.log(`${event}: ${this.eventCounts[event]} times`);
    }
    console.log("==================================\n");
  }
}

module.exports = EventMaestro;
