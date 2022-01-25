// EventEmitter object emits an event.
// myEmitter.on() registers listeners
// while eventEmitter.emit triggers the event

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("An event occurred!");
  console.log("It was lunch");
  console.log("Another event occurred");
  console.log("Trying to finish this QAP1");

});

myEmitter.emit("event");
