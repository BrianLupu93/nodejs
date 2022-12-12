const logEvents = require("./logEvents");

const EventEmmiter = require("events");

class MyEmitter extends EventEmmiter {}

// init the object

const myEmitter = new MyEmitter();

// add listener for the log event

myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emmit the event
  myEmitter.emit("log", "Log event emittend!");
}, 2000);
