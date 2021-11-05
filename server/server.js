const io = require('socket.io')(4000, {
    cors : {
        origin : "http://localhost:3000",
        method: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    console.log("connected")
})