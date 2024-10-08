const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const route = require("./route");
const app = express();

app.use(cors({ origin: "*" }));
app.use(route);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
  methods: ["GET", "POST"],
});

server.listen(8000, () => {
  console.log("Server started on port 8000");
});
