const http = require("http");
const { Worker } = require("worker_threads");
http
  .createServer((req, res) => {
    if (req.url === "/fastpage") {
      res.end("fast page");
    } else if (req.url === "/slowpage") {
      const worker = new Worker("./worker.js");
      worker.on("message", (value) => {
        res.end(`slow page ${value}`);
      });
    }
  })
  .listen(8000, () => {
    console.log("server running on port 8000");
  });
