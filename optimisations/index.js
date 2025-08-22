import cluster from "node:cluster";
import http from "node:http";
import { availableParallelism } from "node:os";

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000, () => {
      console.log("server running on port 8000", process.pid);
    });
}
