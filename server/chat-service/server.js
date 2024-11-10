const { Server } = require("socket.io");
const http = require("http");

const port = process.env.PORT || 3006; // Ensure this matches SVC_PORTS for chat

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust as needed for production
  },
});

io.on("connection", (socket) => {
  console.log("A user connected to the chat service:", socket.id);

  // Handle user joining a chat room
  socket.on("join_room", ({ roomId }) => {
    const roomName = `${roomId}`;
    console.log(`User ${socket.id} joined chat room ${roomName}`);
    socket.join(roomName);
  });

  // Handle sending messages in a chat room
  socket.on("send_message", ({ roomId, senderId, message }) => {
    const roomName = `${roomId}`;
    console.log(`Message in room ${roomName}: ${message}`);
    // Broadcast message to all users in the room
    io.to(roomName).emit("receive_message", {senderId, message});
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected from chat service:", socket.id);
  });
});

// Start WebSocket server
server.listen(port, () => {
  console.log(`Chat service WebSocket listening on port ${port}`);
});
