// worker.js
const { parentPort } = require("worker_threads");

let i;
for (i = 0; i < 900000000; i++) {}
parentPort.postMessage(i);
