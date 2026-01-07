const { Server } = require("socket.io");

const socketUsers = {};


module.exports.socketSetup = (server, app) => {
    const io = new Server(server, {
        cors: {
            origin: ["http://localhost:5173"],  // match frontend
            credentials: true
        }
    });

    // make io accessible in routes/controllers
    app.set("io", io);

    // socket connection
    io.on("connection", (socket) => {
        socketUsers[socket.id] = socket.id;
        console.log("Socket connected:", socket.id);


        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
        });
    });
};
