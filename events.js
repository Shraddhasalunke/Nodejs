// const myEmitter = require("events");
// // const myEmitter = new MyEmitter();
// myEmitter.on("event", function (a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     domain: null,
//   //     _events: { event: [Function] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined } true
// });
// myEmitter.emit("event", "a", "b");

const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("called", () => {
  console.log(" call from xyz ");

  setTimeout(() => {
    console.log(
      "ringing since a long time , are you sure you dont want to receive"
    );
  }, 2000);
});
console.log("hello");

myEmitter.emit("called");