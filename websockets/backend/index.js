import { WebSocketServer } from "ws";
let wss = new WebSocketServer({ port: 5000 });

let allsockets = [];
wss.on("connection", function (socket) {
  socket.on("message", (msg) => {
    let parsedMessage = JSON.parse(msg);
    if (parsedMessage.type === "join") {
        console.log("user roined on room",parsedMessage.payload.roomId);
      allsockets.push({
        socket,
        roomId: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type === "message") {
      let currentRoomId = null;
      let socketInfo = allsockets.find((doc) => doc.socket === socket);
      if (socketInfo) {
        currentRoomId = socketInfo.roomId;
      }
      for (let i = 0; i<allsockets.length; i++) {
        if (allsockets[i].roomId === currentRoomId) {
          allsockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }
  });
});
