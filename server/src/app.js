require("dotenv").config();
const express = require("express");
const connectMongoDB = require("./utils/mongoDBConnection");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/index");

const http = require("http");
const { socketSetup } = require("./socket/socket");

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------- MIDDLEWARE ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true,
    })
);

// ---------------- DB ----------------
connectMongoDB();

// ---------------- SOCKET.IO ----------------
const server = http.createServer(app);
socketSetup(server, app);

// ---------------- ROUTES ----------------
app.get("/", (req, res) => {
    res.send("Hello from Server!");
});
app.use("/api", router);

// ---------------- START SERVER ----------------
server.listen(PORT, () =>
    console.log(`Server started with Socket.IO at PORT : ${PORT}`)
);
